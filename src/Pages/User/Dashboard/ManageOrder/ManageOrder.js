import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    const handleDeleteOrder = () => {
        console.log('deleted');
    };

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

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
                            <th>Bouquet Title</th>
                            <th>Bouquet Price</th>
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
                                <td><Button variant="success" size="sm">APPROVE</Button> <Button onClick={() => handleDeleteOrder(order._id)} variant="danger" size="sm">DELETE</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrder;