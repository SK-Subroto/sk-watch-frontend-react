import axios from 'axios';
import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const emailRef = useRef('');
    const handleAdminSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const user = { email };
        axios.put('https://sks-watch.herokuapp.com/users/admin', user)
            .then(res => {
                if (res.data.modifiedCount) {
                    swal({
                        title: "Sucessful!",
                        text: `"${email}" register as ADMIN`,
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
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '600px' }}>
                <h3 className="text-center fw-bold">Make Admin</h3>
                <Form onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button className="" variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default MakeAdmin;