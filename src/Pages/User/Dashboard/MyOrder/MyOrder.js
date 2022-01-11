import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";

const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://agile-tor-11686.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders, user.email]);

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