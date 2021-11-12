import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';
import './product.css';

const Product = (props) => {
    const { _id, model, rating, madeBy, price, img} = props.product;
    const history = useHistory();

    const handleProductDetails = (id) => {
        history.push(`/products/${id}`)
    }
    return (
        <Col>
            <Card className="border-0 h-100 product-card p-2">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center">{model}</Card.Title>
                    <Card.Text>
                        <h6 className="text-center">Made BY: {madeBy}</h6>
                        <div className="d-flex justify-content-between">
                            <StarRatings
                                rating={parseFloat(rating)}
                                starRatedColor="#CBBA9C"
                                starDimension="20px"
                                starSpacing="2px"
                            />
                            <h5 className="fw-bold">${price}</h5>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                    <Button className="primary-background float-end" variant="light" onClick={() => handleProductDetails(_id)}>Purchase</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;