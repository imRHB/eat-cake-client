import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row, Spinner } from "react-bootstrap";
import styles from './PlaceOrder.module.css';
import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const disclaimerIcon = <FontAwesomeIcon icon={faExclamationTriangle} />;

const PlaceOrder = () => {
    const { cakeId } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const [orderedCake, setOrderedCake] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`https://agile-tor-11686.herokuapp.com/cake/${cakeId}`)
            .then(res => res.json())
            .then(data => {
                setOrderedCake(data);
                setLoading(false);
            });
    }, [cakeId]);

    const onSubmit = data => {
        data.name = user?.displayName;
        data.email = user?.email;

        fetch(`https://agile-tor-11686.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...orderedCake, ...data, status: 'Pending' })
        })
            .then(res => res.json())
            .then(result => {

            });

        toast.success(`Order placed successfully`, {
            position: 'bottom-left',
            autoClose: 2000
        });

        reset();
    };

    return (
        <div className="my-5">
            <ToastContainer />

            {
                loading ? <Container style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner animation="border" variant="info" />
                </Container>
                    :
                    <Container>
                        <div>
                            <h2 className="text-center fw-bold text-success pb-5">Order Checkout</h2>
                        </div>

                        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-5">
                            <Col>
                                <div className="bg-light py-5 rounded-3 border">
                                    <p className="fs-4 fw-bold text-center text-info">Product Information</p>

                                    <div className="mx-3">
                                        <div className="text-center">
                                            <img src={orderedCake.img} alt="" className="w-50 border rounded-3" />
                                        </div>
                                        <Row xs={2} sm={2} md={2} lg={2} className="mt-5">
                                            <Col className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                <p className="fs-5 fw-bold">Name</p>
                                                <p className="fs-5 fw-bold">Flavor</p>
                                                <p className="fs-5 fw-bold">Price</p>
                                            </Col>

                                            <Col className="col-9 col-sm-9 col-md-9 col-lg-9">
                                                <p className="fs-5">{orderedCake.title}</p>

                                                <p className="fs-5">{orderedCake.flavor}</p>

                                                <p className="fs-5">${orderedCake.price}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="mt-5 px-2 py-4 rounded-3 border">
                                    <p className="text-center fs-4 fw-bold text-warning">Product Disclaimer <span>{disclaimerIcon}</span></p>
                                    <ul className="text-muted">
                                        <li>The actual product may vary from the images shown on the website</li>
                                        <li>The actual colours may be vary from those shown depending on the device you are using to view the product or the angle of the item is photographed</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col>
                                <div className="bg-light py-5 rounded-3 border" style={{ position: 'sticky', top: '100px' }}>
                                    <p className="fs-4 fw-bold text-center text-info">Client Information</p>

                                    <form onSubmit={handleSubmit(onSubmit)} className={`${'pb-4'} ${styles.placeOrderForm}`}>
                                        <textarea {...register("shippingAddress", { required: true })} placeholder="Enter shipping address" />

                                        <input type="number" {...register("phone", { required: true })} placeholder="Phone number" />

                                        <input type="submit" value="Place Order" className="btn btn-secondary" />
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default PlaceOrder;