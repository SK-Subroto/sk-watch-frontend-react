import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css';
import { FaAngleRight } from "react-icons/fa";
import { useHistory } from 'react-router';

const Banner = () => {
    const history = useHistory();
    const handleProducts = () => {
        history.push('/products');
    }
    return (
        <Container fluid>
            <div className="home-img">
                <div>
                    <Row>
                        <Col lg="6" className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                            <div>
                                <h2 className="text-white header-title-secondary">NEW ARRIVALS</h2>
                                <h1 className="primary-color header-title-primary mb-4">Our Best <br /> Collections</h1>
                                <Button onClick={handleProducts} variant="outline-primary" className="header-button px-4 py-2">Explore <FaAngleRight /></Button>
                            </div>
                        </Col>
                        <Col lg="6"></Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Banner;