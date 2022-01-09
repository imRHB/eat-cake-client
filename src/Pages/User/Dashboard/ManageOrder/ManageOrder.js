import React, { useEffect, useState } from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Table } from "react-bootstrap";

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    const handleUpdateStatus = cakeId => {
        fetch(`http://localhost:5000/orders/${cakeId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Delivered' })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    const handleDeleteOrder = cakeId => {
        fetch(`http://localhost:5000/orders/${cakeId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

            })
    };

    return (
        <div>
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
                                <td>{order.displayName}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td><Button onClick={() => handleUpdateStatus(order._id)} variant="success" size="sm">APPROVE</Button> <Button onClick={() => handleDeleteOrder(order._id)} variant="none" size="" className="border-danger border-2"><span className="text-danger">{deleteIcon}</span></Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrder;