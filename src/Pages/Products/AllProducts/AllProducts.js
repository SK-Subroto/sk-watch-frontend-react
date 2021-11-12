import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Accordion, Card, Col, Container, Form,
    FormControl, InputGroup, Row, useAccordionButton, Button
} from 'react-bootstrap';
import Product from '../Product/Product';
import ReactLoading from 'react-loading';
import { BsFillCaretDownFill } from "react-icons/bs";
import './AllProducts.css';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState(['AFFORDABLE WATCHES', 'BEST SELLERS', 'BIRTHSTONES', 'EARRINGS', 'EXPRESSION JEWELRY', 'GEMSTONES', 'GOLD WATCHES']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://sks-watch.herokuapp.com/products')
            .then(res => setAllProducts(res.data.products))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, []);

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );

        return (
            <button
                type="button"
                style={{ backgroundColor: 'transparent', border: 0, float: 'right' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }
    return (
        <>
            {loading ?
                <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                    <ReactLoading type={"spinningBubbles"} color={"#A99577"} height={100} width={100} />
                </div>
                :
                <Container fluid>
                    <div className="products-cover-img">
                        <div className="text-center mt-5 pt-5 mb-3">
                            {/* <p className="secondary-color">360° COLLECTION</p> */}
                            <h1 className="title text-white" style={{ fontWeight: '700', fontFamily: 'Playfair Display' }}>Limited Edition Watches</h1>
                        </div>
                    </div>
                    <Container>
                        <Row className="py-4">
                            <Col lg="4" >
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Card.Header style={{ backgroundColor: '#CBBA9C' }}>
                                            <InputGroup className="mt-4" style={{ border: '#B884A4 solid 1px', borderRadius: 5 }}>
                                                <FormControl
                                                    placeholder="Search watch"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                            </InputGroup>
                                            <CustomToggle eventKey="0"><BsFillCaretDownFill color='#B884A4' /></CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <h2 className="my-4 fw-bold" style={{ fontFamily: 'Playfair Display' }}>Watch Categories</h2>
                                                {
                                                    categories.map(category => <Form.Check key={category} className="mt-2 text-secondary" style={{ fontSize: "13px" }} type="checkbox" label={category} />)
                                                }


                                                <Button className="my-5 primary-background" variant="light">Search</Button>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Col>
                            <Col lg="8">
                                <Container>
                                    <Row xs={1} md={1} lg={2} className="g-4">
                                        {
                                            allProducts.map(product => <Product key="{product._id}" product={product} />)
                                        }
                                    </Row>
                                </Container>
                            </Col>

                        </Row>
                    </Container>
                </Container>
            }
        </>
    );
};

export default AllProducts;