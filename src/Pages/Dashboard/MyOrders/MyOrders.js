import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";
import swal from 'sweetalert';
import ReactLoading from 'react-loading';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://sks-watch.herokuapp.com/orders?email=${user.email}`)
            .then(res => setMyOrders(res.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, []);

    const handleDeleteMyOrder = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to cancel you order",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // delete reservation 
                    axios.delete(`https://sks-watch.herokuapp.com/orders/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                const remainingOrders = myOrders.filter(event => event._id !== id);
                                setMyOrders(remainingOrders);
                            }
                        }).catch(err => console.log(err))
                    swal("Your reservation is sucessfully cancelled", {
                        icon: "success",
                    });
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <>
            {loading ?
                <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
                    <ReactLoading type={"bars"} color={"#A99577"} height={80} width={80} />
                </div>
                :
                <Container>
                    <div className="p-5 shadow overflow-scroll" style={{ height: '85vh' }}>
                        <Table hover responsive className="product-table shadow">
                            <thead className="border-top">
                                <tr>
                                    <th>#</th>
                                    <th>Product Image</th>
                                    <th>Product Title</th>
                                    <th>Order Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img style={{ height: '100px' }} src={product.img} alt="" /></td>
                                                <td>{product.model}</td>
                                                <td>${product.price}</td>
                                                <td>{product.date}</td>
                                                <td><span className={!product.status ? "text-warning fw-bold" : "text-success fw-bold"}>{!product.status ? "Pending" : "Shipped"}</span></td>
                                                <td 
                                                    onClick={() => handleDeleteMyOrder(product._id)}
                                                    style={{ cursor: 'pointer' }}
                                                 ><BsFillTrashFill className="text-danger" /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Container>
            }
        </>
    );
};

export default MyOrders;