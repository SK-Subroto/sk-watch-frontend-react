import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import ReactLoading from 'react-loading';
import useAuth from '../../../hooks/useAuth';
import './Purchase.css'
import swal from 'sweetalert';

const Purchase = ({ id }) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const [orderInfo, setOrderInfo] = useState({});

    useEffect(() => {
        axios.get(`https://sks-watch.herokuapp.com/products/${id}`)
            .then(res => setProduct(res.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, []);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        // collect data
        const order = {
            ...orderInfo,
            name: user.displayName,
            email: user.email,
            model: product.model,
            img: product.img,
            price: product.price,
            date: new Date().toLocaleDateString(),
            status: false
        }
        console.log(order);
        // send to the server
        axios.post('https://sks-watch.herokuapp.com/orders', order)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "You successfully order this product!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
        e.preventDefault();
    }

    return (
        <>
            {loading ?
                <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                    <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
                </div>
                :
                <Container style={{ minHeight: '80vh' }}>
                    <Row xs={1} md={2} lg={2} className="g-4 px-lg-5">
                        <Col className="d-flex justify-content-center flex-column">
                            <img className="product-main-img" s src={product.img} alt="" />
                            <Row lg={4} className="g-3">
                                <Col><div className="border border-1"><img className="img-fluid" style={{ transform: 'rotate(90deg)' }} src={product.img} alt="" /></div></Col>
                                <Col><div className="border border-1"><img className="img-fluid" src={product.img} alt="" /></div></Col>
                                <Col><div className="border border-1"><img className="img-fluid" src={product.img} alt="" /></div></Col>
                                <Col><div className="border border-1"><img className="img-fluid" style={{ transform: 'rotate(90deg)' }} src={product.img} alt="" /></div></Col>
                            </Row>
                        </Col>
                        <Col>
                            <div>
                                <h4 className="fw-bold">{product.model}</h4>
                                <StarRatings
                                    rating={parseFloat(product.rating)}
                                    starRatedColor="#CBBA9C"
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                                <p className="text-secondary">{product.description}</p>
                                <Table className="table-borderless">
                                    <tbody>
                                        <tr >
                                            <td className="fw-bold">Price:</td>
                                            <td className="fs-5">${product.price}</td>
                                        </tr>
                                        <tr >
                                            <td className="fw-bold">Size:</td>
                                            <td>
                                                <span className="border border-2 me-2 fw-light p-1">24mm</span>
                                                <span className="border border-2 me-2 fw-light p-1">28mm</span>
                                                <span className="border border-2 me-2 fw-light p-1">32mm</span>
                                            </td>
                                        </tr>
                                        <tr >
                                            <td className="fw-bold">Color:</td>
                                            <td class="d-flex">
                                                <div className="border border-2 me-2 fw-light p-1" style={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#DAB05F' }}></div>
                                                <div className="border border-2 me-2 fw-light p-1" style={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: 'silver' }}></div>
                                                <div className="border border-2 me-2 fw-light p-1" style={{ borderRadius: '50%', height: '20px', width: '20px', backgroundColor: '#2C2D2A' }}></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Form onSubmit={handleOrderSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control value={user.displayName} type="text" placeholder="Name" disabled />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control value={user.email} type="email" placeholder="Email" disabled />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Control name="phone" onChange={handleOnBlur} type="text" placeholder="Enter Phone" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Control name="address" onChange={handleOnBlur} type="text" placeholder="Address" />
                                    </Form.Group>
                                    <Button variant="light" className="purchase-btn" type="submit">
                                        Purchase
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
};

export default Purchase;