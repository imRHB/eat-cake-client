import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cake')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDeleteProduct = () => {
        console.log('deleted');
    }

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Manage Products</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Cake Title</th>
                            <th>Cake Price</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={product.img} style={{ width: '64px', height: '64px', border: '1px solid gray', borderRadius: '4px' }} alt="" /></td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>In Stock</td>
                                <td><Button onClick={() => handleDeleteProduct(product._id)} variant="danger" size="sm">DELETE</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageProducts;