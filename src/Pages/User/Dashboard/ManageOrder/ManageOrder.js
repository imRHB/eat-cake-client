import React, { useEffect, useState } from 'react';
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://agile-tor-11686.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    const handleUpdateStatus = cakeId => {
        fetch(`https://agile-tor-11686.herokuapp.com/orders`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cakeId)
        })
            .then(res => res.json())
            .then(result => {

            });

        toast.success(`Order shipped successfully`, {
            position: 'bottom-left',
            autoClose: 2000
        });
    };

    const handleDeleteOrder = cakeId => {
        const deleteConfirmation = window.confirm('Do you want to delete the product?');

        if (deleteConfirmation) {
            fetch(`https://agile-tor-11686.herokuapp.com/orders/${cakeId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                });

            toast.success(`Order deleted successfully`, {
                position: 'bottom-left',
                autoClose: 2000
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
                    <h3 className="fw-bold">Manage Orders</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Cake Price</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={order.img} style={{ width: '72px', border: '1px solid gray', borderRadius: '4px' }} alt="" /></td>
                                <td>{order.title}</td>
                                <td>${order.price}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td>
                                    <>
                                        <Button onClick={() => handleUpdateStatus(order._id)} variant="none" size="" className="border-success border-2 me-2"><span className="text-success">{checkIcon}</span></Button>
                                        <Button onClick={() => handleDeleteOrder(order._id)} variant="none" size="" className="border-danger border-2"><span className="text-danger">{deleteIcon}</span></Button>
                                    </>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrder;