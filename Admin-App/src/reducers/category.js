import { categoryConstant } from "../actions/constants"

const initialState = {
    categories: [],
    loading: false,
    error: null
}

const buildNewCategories = (parentId, categories, newCategory) => {
    let myCategories = [];
    let newCat = {
      _id: newCategory._id,
      name: newCategory.name,
      slug: newCategory.slug,
      parentId: newCategory.parentId,
      children: newCategory.children,
    };

    categories.forEach(cat => {
        if (cat._id == parentId) {
          myCategories.push({
            ...cat,
            children:
              cat.children && cat.children.length > 0
                ? buildNewCategories(
                    parentId,
                    [...cat.children, newCat],
                    newCategory
                  )
                : []
          });
        } else {
          myCategories.push({
            ...cat,
            children:
              cat.children && cat.children.length > 0
                ? buildNewCategories(parentId, cat.children, newCategory)
                : [],
          });
        }
    })
            console.log(myCategories);
            return myCategories;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case categoryConstant.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: buildNewCategories(action.payload.category.parentId, state.categories, action.payload.category),
                loading: false
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initialState
            }
    }
    return state;
}