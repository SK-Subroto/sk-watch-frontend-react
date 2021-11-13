import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import blankImg from '../../../images/blank-profile.png';

const AddReview = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }

    const handleReviewSubmit = e => {
        // collect data
        const newReview = {
            ...review,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }
        // send to the server
        axios.post('https://sks-watch.herokuapp.com/reviews', newReview)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Sucessful!",
                        text: "Thank you stay with us",
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
        <Container>
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '600px' }}>
                <h3 className="text-center fw-bold">Rate Us</h3>
                <div className="my-3 text-center">
                    <img className="rounded-circle" src={user.photoURL || blankImg} style={{ height: 100, width: 100 }} alt="" />
                </div>
                <Form onSubmit={handleReviewSubmit}>
                    {/* <img src={user.photoURL} alt="" /> */}
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={user.displayName} type="text" placeholder="Enter name" disabled />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={user.email} type="email" placeholder="Email" disabled />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control name="rating" onBlur={handleOnBlur} type="number" step="0.1" placeholder="0 to 5" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="comment" onBlur={handleOnBlur} as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddReview;