import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, Badge, Dropdown } from 'react-bootstrap';
import { BagPlus, ListUl, Person, BsPersonCircle, BsPower } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Header.css';
import blankImg from '../../../images/blank-profile.png';
import useAuth from '../../../hooks/useAuth';
import skLogo from '../../../images/sk-watch-logo.png';


const Header = () => {

    const { user, logout } = useAuth();
    const history = useHistory();

    const handleHomePage = () => {
        history.push('/home');
    }

    const activeStyle = {
        fontWeight: "bold",
        color: "#A48484",
        borderBottom: "solid 2px #A48484"
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <Navbar bg="white" expand="lg" fixed="top" className={scrolled ? "shadow py-3" : "py-3"}>
                <Container fluid>
                    <Navbar.Brand onClick={handleHomePage} style={{ cursor: 'pointer' }} className="d-flex align-items-center fs-3 primary-color">
                        <img
                            alt=""
                            src={skLogo}
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="fw-bold" style={{ color: '#A99577' }}>SK Watch</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center fw-bold primary-color" style={{ fontSize: 18 }}>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/products">Products</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                            {/* toggle loging logout  */}
                            {!user?.email ?
                                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/login"><BsPersonCircle className="fs-5 mb-1" /> Login</Nav.Link>
                                :
                                <Dropdown>
                                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                                        <img src={user.photoURL || blankImg} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                                        <span style={{ fontSize: 18, fontFamily: 'sans-serif' }}> {user.displayName}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={logout}><BsPower /> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 100 }}>

            </div>
        </>
    );
};

export default Header;