import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { addCategory, getAllCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/UI/Input";

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const handleClose = () => {
    const form = new FormData();

    console.log(parentCategoryId)
    form.append("name", categoryName);
    form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);

    dispatch(addCategory(form));

    setShow(false);
  };

  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    const myCategories = [];
    categories.forEach((cat) => {
      myCategories.push(
        <li key={category.name}>
          {cat.name}
          {cat.children.length > 0 ? (
            <ul>{renderCategories(cat.children)}</ul>
          ) : null}
        </li>
      );
    });
    return myCategories;
  };

  const createCategoryList = (categories, options = []) => {
    categories.forEach((cat) => {
      options.push({
        value: cat._id,
        name: cat.name,
      });
      if (cat.children.length > 0) {
        createCategoryList(cat.children, options);
      }
    });
    return options;
  };

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}</ul>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder={"Category Name"}
            onChange={(e) => setCategoryName(e.target.value)}
          ></Input>

          <select
            className="form-control"
            value={parentCategoryId}
            onChange={(e) => setParentCategoryId(e.target.value)}
          >
            <option>Select Parent Category</option>
            {createCategoryList(category.categories).map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>

          <input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Category;
