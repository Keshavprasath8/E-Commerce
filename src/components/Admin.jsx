import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Admin = () => {
  const [fetch, setFetch] = useState([]);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newImages, setNewImages] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    axios("https://fakestoreapi.in/api/products")
      .then((response) => {
        console.log(response);
        setFetch(response.data.products); 
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClose = () => {
    setShow(false);
    setEditId(null);
    setNewImages("");
    setNewTitle("");
    setNewPrice("");
  };

  const handleShow = (id, image, title, price) => {
    setShow(true);
    setEditId(id);
    setNewImages(image || "");
    setNewTitle(title || "");
    setNewPrice(price || "");
  };

  const addProduct = () => {
    const title = newTitle.trim();
    const image = newImages.trim();
    const price = String(newPrice);
    setShow(false);
    const newProduct = { title, image, price };
    console.log(newProduct);

    axios
      .post("https://fakestoreapi.in/api/products", newProduct) 
      .then((response) => {
        
        console.log(response.data.product,fetch);

        setFetch([...fetch, response.data.product]);
        alert("Product Added Successfully");
      })
      .catch((error) => console.error(error));
  };

  const updateProduct = () => {
    const updatedItem = { title: newTitle, image: newImages, price: String(newPrice) };
    
    console.log(updatedItem);
  
    axios
      .put(`https://fakestoreapi.in/api/products/${editId}`, updatedItem)
      .then((response) => {
       
        console.log(response.data.product);
        
        setFetch(fetch.map((item) => (item.id === editId ? response.data.product : item)));
        alert("Product Updated Successfully");
        handleClose();
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <div className='row justify-content-evenly row-gap-2 column-gap-1 w-100'>
      <div className="model">
        <Button className="btn btn-primary my-2" onClick={() => setShow(true)}>
          Add Product
        </Button>

        {/* Add Product Modal */}
        <Modal show={show && !editId} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >Adding Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Add Image URL</Form.Label>
                <Form.Control
                  value={newImages}
                  onChange={(e) => setNewImages(e.target.value)}
                  type="text"
                  placeholder="Enter the image url"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  type="text"
                  placeholder="Enter the product title"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  type="text"
                  placeholder="Enter the Product Price in $"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addProduct}>
              Add Product
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {fetch.map((item) => (
        <Card style={{ width: "18rem",borderRadius: "30px" }} key={item.id}>
          <Card.Img variant="top" src={item.image} style={{height:"180px", width:"200px", objectFit:"contain", padding:"10px", margin:"0 auto"}} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Button
              variant="primary"
              onClick={() => handleShow(item.id, item.image, item.title, item.price)}
            >
              Update
            </Button>
          </Card.Body>
        </Card>
      ))}

      {/* Update Product Modal */}
      <Modal show={show && !!editId} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Edit Image URL</Form.Label>
              <Form.Control
                value={newImages}
                onChange={(e) => setNewImages(e.target.value)}
                type="text"
                placeholder="Edit the image url"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edit Product Title</Form.Label>
              <Form.Control
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                type="text"
                placeholder="Edit the product title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edit Product Price</Form.Label>
              <Form.Control
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                type="number"
                placeholder="Edit the product price"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProduct}>
            Update Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
