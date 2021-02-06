const slugify = require("slugify");
const Category = require("../models/category");
const { getAsync, setAsync, cache, deleteAsync } = require("../redis");

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;

  if (parentId == null)
    category = categories.filter((cat) => cat.parentId == undefined);
  else category = categories.filter((cat) => cat.parentId == parentId);

  category.forEach((cat) => {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      parentId: cat.parentId,
      children: createCategories(categories, cat._id),
    });
  });
  return categoryList;
}

const addCategory = async (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.file) {
    categoryObj.categoryImage =
      `${process.env.DOMAIN}:${process.env.PORT}/public/` + req.file.filename;
  }

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  await deleteAsync('/categories')

  let cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) return res.status(201).json({ category });
  });
};

const getCategories = async (req, res) => {
  const key = "/categories";
  const cached = await getAsync(key).catch(console.error);

  if (cached) {
    const data = JSON.parse(cached);
    console.log(`using cache: ${key}`);
    const categoryList = createCategories(data);
    return res.status(200).json({ categoryList });
  } else {
    Category.find({}).exec((error, categories) => {
      if (error) return res.status(400).json({ error });
      if (categories) {
        setAsync(key, JSON.stringify(categories)).catch(console.error);
        cache.expire(key, 60 * 10);
        const categoryList = createCategories(categories);
        return res.status(200).json({ categoryList });
      }
    });
  }
};

module.exports = {
  getCategories,
  addCategory,
};
