import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { BsFillTagFill } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";
// import './Blog.css';

const Blog = () => {
    return (
        <Container style={{ marginTop: 50 }}>
            <div className="text-center mt-5 pt-5 mb-3">
                <p className="secondary-color fw-light">HAPPENINGS AROUND</p>
                <h1 className="" style={{ fontWeight: 900 }}> <span className="primary-color">OUR </span>BLOG</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" className="zoom" src="https://cdn.shopify.com/s/files/1/1692/8885/articles/blog4.jpg?v=1485167450" />
                        <Card.Body>
                            <div className="fw-light mb-2">By Richad | October 23, 2021 | 2 Comments</div>
                            <Card.Title className="fw-bold primary-color">CREATORS OF THE MAN MADE WATCHES</Card.Title>
                            <Card.Text>
                                <div className="text-secondary">
                                    We’re mad about style, mad about gear, and today we’re mad about watch.
                                    A good watch isn’t just an extension of style; it’s an extension of you.
                                </div>
                                <div className="primary-color mt-2">
                                    <BsFillTagFill /> Casio, Rolex
                                </div>
                            </Card.Text>
                            <Card.Footer className="border-0 bg-white">
                                <Button variant="light" className="purchase-btn btn-sm">READ MORE <FaAngleDoubleRight className="mb-1" /></Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1692/8885/articles/blog12.jpg?v=1485168301" />
                        <Card.Body>
                            <div className="fw-light mb-2">By Bekar | November 6, 2021 | 5 Comments</div>
                            <Card.Title className="fw-bold primary-color">A LUBRICANT-FREE WATCH FOR PERFECT MEN</Card.Title>
                            <Card.Text>
                                <div className="text-secondary">
                                    a watch that runs without a drop of lubricant. For as long as clocks and watches have been made, 
                                    oils have been essential to lubricate.
                                </div>
                                <div className="primary-color mt-2">
                                    <BsFillTagFill /> Casio, Titanic
                                </div>
                            </Card.Text>
                            <Card.Footer className="border-0 bg-white">
                                <Button variant="light" className="purchase-btn btn-sm">READ MORE <FaAngleDoubleRight className="mb-1" /></Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1692/8885/articles/blog10_518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg?v=1485167950" />
                        <Card.Body>
                            <div className="fw-light mb-2">By Ram M | November 2, 2021 | 2 Comments</div>
                            <Card.Title className="fw-bold primary-color">MODERN DIGITAL JUMP-SECONDS DISPLAY</Card.Title>
                            <Card.Text>
                                <div className="text-secondary">
                                    Nearly eight years, to be exact, back at a time when the Black-Eyed
                                     Peas were still topping the charts and the Vagabondage II was turning signature.
                                </div>
                                <div className="primary-color mt-2">
                                    <BsFillTagFill /> Rolex, Titanic
                                </div>
                            </Card.Text>
                            <Card.Footer className="border-0 bg-white">
                                <Button variant="light" className="purchase-btn btn-sm">READ MORE <FaAngleDoubleRight className="mb-1" /></Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;