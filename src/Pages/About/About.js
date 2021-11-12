import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaAngleDoubleRight } from "react-icons/fa";
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <>
            <Header />
            <Container className="mt-5 pt-5 px-lg-5">
                <Row>
                    <Col lg="6">
                        <div className="pt-lg-5">
                            <p className="text-secondary header-title-secondary">About Us</p>
                            <h1 className="fw-bold" style={{ fontFamily: 'Playfair Display', fontSize: '50px' }}>A Unique watch that fits
                                Your Style</h1>
                            <p className="my-4 text-secondary" style={{ fontFamily: 'sans-serif' }}>The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
                            <Button variant="light" className="purchase-btn btn-sm">READ MORE <FaAngleDoubleRight className="mb-1" /></Button>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img className="" height="500" src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-1.jpg?v=1633497682" alt="" style={{ borderRadius: '50% 50% 0 0' }} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default About;