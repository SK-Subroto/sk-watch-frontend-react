import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import './Footer.css'
import skLogo from '../../../images/sk-watch-logo.png';

const Footer = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <div className="row footer-container text-white px-lg-5 pt-5" >
                <Row>
                    <Col lg="5" xs="12">
                        <div className="px-3">
                            <div className="d-flex align-items-center mb-2">
                                <img style={{ height: 50 }} src={skLogo} alt="" />
                                <h3 className="primary-color">SK Watch</h3>
                            </div>
                            <p className="text-secondary fs-6">Everyone looks at your watch and it represents who you are,
                                your values and your personal style. <span className="fst-italic"> ~ Kobe Bryant</span></p>
                            <div className="fs-3">
                                <BsFacebook className="me-3" />
                                <BsTwitter className="me-3" />
                                <BsLinkedin className="me-3" />
                                <BsWhatsapp />
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" xs="6">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 mb-2 fs-4" style={{ fontFamily: 'Playfair Display' }}>Navigation</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Home</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">About</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Services</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Blog</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Contact</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="2" xs="6">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 mb-2 fs-4" style={{ fontFamily: 'Playfair Display' }}>Services</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Blackforest</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Bodhubon</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Rongdhonu</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Meghrong</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="3" xs="12">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 mb-2 fs-4" style={{ fontFamily: 'Playfair Display' }}>Contact Us</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">76/A, Green Lane, Dhanmondi, Dhaka</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">subroto.sks@gmail.com</ListGroup.Item>
                            <ListGroup.Item className="text-warning bg-transparent border-0 fw-bold fs-4">(+880) 178817353</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <div className="text-center pb-3 mt-5 pt-5">© 2021 SK Watch. All rights reserved</div>
            </div>
        </Container>
    );
};

export default Footer;