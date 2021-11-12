import React, { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaUserTie, FaHeart, FaBars } from 'react-icons/fa';
import { BsStarFill, BsCreditCard2BackFill, BsFillHouseFill,
         BsFillCartFill, BsFillInboxesFill, BsFillGearFill } from "react-icons/bs";
import { BsPower } from 'react-icons/bs';
import sidebarBg from '../../../images/bg2.jpg';
import { Route, Switch, useRouteMatch } from 'react-router';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../AddReview/AddReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import { Link, NavLink } from 'react-router-dom';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import blankImg from '../../../images/blank-profile.png';
import { Button, Container, Navbar } from 'react-bootstrap';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const { user, admin, logout } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "#A48484",
    }

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <div className={`app d-flex ${toggled ? 'toggled' : ''}`}>
            <ProSidebar
                // image={image ? sidebarBg : false}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
                style={{ height: '102vh' }}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <img src={user.photoURL || blankImg} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                        <span style={{ fontSize: 18, fontFamily: 'sans-serif' }}> {user?.displayName?.split(' ')[0]}</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        {/* <MenuItem icon={<FaTachometerAlt />}> <NavLink activeStyle={activeStyle} to={`${url}`}>Home</NavLink></MenuItem> */}
                        <MenuItem icon={<BsFillHouseFill />}> <NavLink activeStyle={activeStyle} to={'/home'}>Home</NavLink></MenuItem>
                        {!admin ? 
                            (
                                <>
                                    <MenuItem icon={<BsFillCartFill />}> <NavLink activeStyle={activeStyle} to={`${url}/my-orders`}>My Orders</NavLink></MenuItem>
                                    <MenuItem icon={<BsCreditCard2BackFill />}> <NavLink activeStyle={activeStyle} to={`${url}/payment`}>Payment</NavLink></MenuItem>
                                    <MenuItem icon={<BsStarFill />}> <NavLink activeStyle={activeStyle} to={`${url}/add-review`}>Add Review</NavLink></MenuItem>
                                </>
                            ):(
                                <>
                                    <MenuItem icon={<BsFillCartFill />}> <NavLink activeStyle={activeStyle} to={`${url}/manage-orders`}>Manage Orders</NavLink></MenuItem>
                                    <MenuItem icon={<FaUserTie />}> <NavLink activeStyle={activeStyle} to={`${url}/make-admin`}>Make Admin</NavLink></MenuItem>
                                    <MenuItem icon={<BsFillInboxesFill />}> <NavLink activeStyle={activeStyle} to={`${url}/add-product`}>Add Product</NavLink></MenuItem>
                                    <MenuItem icon={<BsFillGearFill />}> <NavLink activeStyle={activeStyle} to={`${url}/manage-products`}>Manage Products</NavLink></MenuItem>
                                </>
                            )
                        }
                        
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '40px 24px',
                        }}
                    >
                        <Button variant="danger" onClick={logout}><BsPower /> Logout</Button>
                    </div>
                </SidebarFooter>
            </ProSidebar>


            {/* main */}
            <main style={{width: '100%'}}>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div className="d-lg-none" onClick={() => handleToggleSidebar(!toggled)}>
                                <FaBars className="mb-1 me-2" /> <span> Dashboard</span>
                            </div>
                            <div className="d-none d-lg-block" onClick={() => handleCollapsedChange(!collapsed)}>
                                <FaBars className="mb-1 me-2" /> <span> Dashboard</span>
                            </div>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <section className="p-4" style={{minHeight: '90vh'}}>
                    <Switch>
                        <Route exact path={`${path}`}>
                            <div className="alert alert-primary">
                                <h1 className="text-center py-5 fw-bold">Welcome To Dashboard</h1>
                            </div>
                        </Route>
                        <PrivateRoute path={`${path}/my-orders`}>
                            <MyOrders />
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/payment`}>
                            <Payment />
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/add-review`}>
                            <Review />
                        </PrivateRoute>
                        <AdminRoute path={`${path}/manage-orders`}>
                            <ManageOrders />
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin />
                        </AdminRoute>
                        <AdminRoute path={`${path}/add-product`}>
                            <AddProduct />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-products`}>
                            <ManageProducts />
                        </AdminRoute>
                    </Switch>
                </section>
                <footer>
                    <div className="text-center">© 2021 SK Watch. All rights reserved</div>
                </footer>
            </main>
        </div>
    );
};

export default Dashboard;