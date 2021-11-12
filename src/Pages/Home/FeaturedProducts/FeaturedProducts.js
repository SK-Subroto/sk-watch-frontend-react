import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Products/Product/Product';

const FeaturedProducts = ({ featuredProducts }) => {
    
    return (
        <Container>
            <div className="text-center mt-5 pt-5 mb-3">
                <p className="secondary-color fw-light">360° COLLECTION</p>
                <h1 className="" style={{ fontWeight: 900 }}> <span className="primary-color">FEATURED </span>PRODUCTS</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 p-lg-5">
                {
                    featuredProducts.slice(0, 6).map(product => <Product key="{product._id}" product={product} />)
                }
            </Row>
        </Container>
    );
};

export default FeaturedProducts;