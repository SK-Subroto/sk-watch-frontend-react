import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsCheckSquare, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    let findOrder = {};

    useEffect(() => {
        axios.get('https://sks-watch.herokuapp.com/orders')
            .then(res => setOrders(res.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, [findOrder]);

    const handleUpdateStatus = (id) => {
        findOrder = orders.find(product => product._id === id)
        swal({
            title: "Are you sure?",
            text: `You want to make status ${!findOrder.status ? "Sheeped" : "Pending"}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    findOrder.status = !findOrder.status;
                    // update approve or pending 
                    axios.put(`https://sks-watch.herokuapp.com/orders/${id}`, findOrder)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                            }
                        })
                        .catch(err => console.log(err))
                    swal("Status updated!", {
                        icon: "success",
                    });
                } else {
                    // swal("Your imaginary file is safe!");
                }
            });
    }

    const handleDeleteOrder = (id) => {
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
                                const remainingOrders = orders.filter(event => event._id !== id);
                                setOrders(remainingOrders);
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
                        <Table hover responsive className="product-table">
                            <thead className="border-top">
                                <tr>
                                    <th>#</th>
                                    <th>Product Image</th>
                                    <th>Product Title</th>
                                    <th>Customer Name</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img style={{ height: '100px' }} src={product.img} alt="" /></td>
                                                <td>{product.model}</td>
                                                <td>{product.name}</td>
                                                <td>{product.phone}</td>
                                                <td>{product.address}</td>
                                                <td>${product.price}</td>
                                                <td>{product.date}</td>
                                                <td><span className={!product.status ? "text-warning fw-bold" : "text-success fw-bold"}>{!product.status ? "Pending" : "Sheeped"}</span></td>
                                                <td 
                                                    onClick={() => handleUpdateStatus(product._id)} 
                                                    style={{ cursor: 'pointer' }}
                                                ><BsCheckSquare className="text-success" /></td>
                                                <td 
                                                    onClick={() => handleDeleteOrder(product._id)}
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

export default ManageOrders;