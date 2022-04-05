import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://eat-cake-server.herokuapp.com/cake')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleDeleteProduct = (cakeId) => {
        const deleteConfirmation = window.confirm('Do you want to delete the product?');

        if (deleteConfirmation) {
            fetch(`https://eat-cake-server.herokuapp.com/cake/${cakeId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {

                });

            toast.success(`Product deleted successfully`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        }
        else {
            return;
        }
    };

    return (
        <div>
            <ToastContainer />

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
                            products.map((product, index) => <tr
                                key={product._id}
                            >
                                <td>{index + 1}</td>
                                <td><img src={product.img} style={{ width: '64px', height: '64px', border: '1px solid gray', borderRadius: '4px' }} alt="" /></td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>In Stock</td>
                                <td>
                                    <Button onClick={() => handleDeleteProduct(product._id)} variant="none" size="" className="border-danger border-2"><span className="text-danger">{deleteIcon}</span></Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageProducts;