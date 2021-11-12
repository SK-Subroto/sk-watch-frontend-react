import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://sks-watch.herokuapp.com/products')
            .then(res => setAllProducts(res.data.products))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, []);

    const handleDeleteProduct = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to cancel product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // delete reservation 
                    axios.delete(`https://sks-watch.herokuapp.com/products/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                const remainingProducts = allProducts.filter(product => product._id !== id);
                                setAllProducts(remainingProducts);
                            }
                        }).catch(err => console.log(err))
                    swal("Product is sucessfully deleted", {
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
                                    <th>Product Model</th>
                                    <th>Made By</th>
                                    <th>Rating</th>
                                    <th>Price</th>
                                    {/* <th>Description</th> */}
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img style={{ height: '100px' }} src={product.img} alt="" /></td>
                                                <td>{product.model}</td>
                                                <td>{product.madeBy}</td>
                                                <td>
                                                    <StarRatings
                                                        rating={parseFloat(product.rating)}
                                                        starRatedColor="#CBBA9C"
                                                        starDimension="20px"
                                                        starSpacing="2px"
                                                    />
                                                </td>
                                                <td>{product.price}</td>
                                                {/* <td>{product.description}</td> */}
                                                <td 
                                                    onClick={() => handleDeleteProduct(product._id)}
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

export default ManageProducts;