import React from 'react';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPlus, faSignOutAlt, faTh, faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import styles from './Dashboard.module.css';
import useAuth from "../../../../hooks/useAuth";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const dashboardIcon = <FontAwesomeIcon icon={faTh} />;
const reviewIcon = <FontAwesomeIcon icon={faCommentAlt} />;
const listIcon = <FontAwesomeIcon icon={faThList} />;
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const serviceIcon = <FontAwesomeIcon icon={faThLarge} />;
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const Dashboard = () => {
    const { logout } = useAuth();

    return (
        <div className="">
            {/* <Container>
                <h3 className="text-center fw-bold">Dashboard</h3>
            </Container> */}

            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-0">
                        <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                            <div className="bg-dark py-4 border-0" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="dark" className={`${'flex-column'} ${styles.dashNav}`}>
                                    <Link to="/home"><span className="me-3">{homeIcon}</span>Home</Link>

                                    <Link to="/dashboard"><span className="me-3">{dashboardIcon}</span>Dashboard</Link>

                                    <Link to="manage-products"><span className="me-3">{serviceIcon}</span>Manage Products</Link>

                                    <Link to="manage-order"><span className="me-3">{serviceIcon}</span>Manage Order</Link>

                                    <Link to="my-order"><span className="me-3">{listIcon}</span>My Order</Link>

                                    <Link to="add-review"><span className="me-3">{reviewIcon}</span>Add Review</Link>

                                    <Link to="add-product"><span className="me-3">{plusIcon}</span>Add Product</Link>

                                    <Link to='/login' onClick={logout}><span className="me-3">{logoutIcon}</span>Logout</Link>

                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div className="mx-1 px-2 py-4 bg-light">
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;