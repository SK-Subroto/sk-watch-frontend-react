import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const AddProduct = () => {
    const [product, setProduct] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        setProduct(newInfo);
    }

    const handleSubmitProduct = e => {
        e.preventDefault();
        const newProduct = {
            ...product
        }
        // console.log(newProduct);
        axios.post('https://sks-watch.herokuapp.com/products', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "Product successfully added!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
                <h3 className="text-center fw-bold mb-2">Add Product</h3>
                <Form onSubmit={handleSubmitProduct}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Model</Form.Label>
                            <Form.Control name="model" onBlur={handleOnBlur} type="text" placeholder="Enter Model Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMadeBy">
                            <Form.Label>Made By</Form.Label>
                            <Form.Control name="madeBy" onBlur={handleOnBlur} type="text" placeholder="Made by" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridRating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control name="rating" onBlur={handleOnBlur} type="number" step="0.1" placeholder="0" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" onBlur={handleOnBlur} type="number" step="0.01" placeholder="00.0" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImg">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control name="img" onBlur={handleOnBlur} placeholder="http://example.png" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="Description" onBlur={handleOnBlur} as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddProduct;