import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders, user.email]);

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
                    <h3 className="fw-bold">My Order</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Cake Price</th>
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
                                <td>{order.status}</td>
                                <td><Button onClick={() => handleDeleteOrder(order._id)} variant="none" size="" className="border-danger border-2"><span className="text-danger">{deleteIcon}</span></Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrder;