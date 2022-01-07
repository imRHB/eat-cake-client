// import { faSignInAlt, faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import styles from './Navigation.module.css';

// const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
// const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
// const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const Navigation = () => {
    // const { user, logout } = useAuth();
    const { user, logout } = useFirebase();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand>
                    <img src="" alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`${'me-auto'} ${styles.navbarNav}`}>
                        {/* <NavLink to="/home">Home</NavLink>
                        <NavLink to="/cake">Cake</NavLink> */}
                        <Link to="home">Home</Link>
                        <Link to="cake">Cake</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="login">Login</Link>
                        {/* <Link to="/register">Register</Link> */}
                        <Link to="dashboard">Dashboard</Link>
                        {/* <Link to="manage-products">manage-products</Link>
                        <Link to="manage-order">manage-order</Link>
                        <Link to="my-order">my-order</Link>
                        <Link to="add-review">add-review</Link>
                        <Link to="add-product">add-product</Link>

                        <Link to="test">Test</Link> */}
                        {
                            user.email && <>
                                <Button onClick={logout}>Logout</Button>
                            </>
                        }
                    </Nav>
                    {/* <Nav>
                        {
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        }

                        {
                            user?.email ? <div className="d-lg-flex align-items-center justify-content-center my-2 my-lg-0">

                                <h5 className="mx-0 mx-lg-3 mb-3 my-lg-auto text-success fw-bold m-0"><span className="fs-4 ms-2">{userIcon}</span> {user.displayName}</h5>

                                <Button
                                    variant="dark"
                                    className="ms-2" onClick={logout}>Logout<span className="ms-2">{logoutIcon}</span>
                                </Button>
                            </div>
                                :
                                <div className="my-3 my-lg-3">
                                    <Button
                                        variant="secondary"
                                        className="ms-2" onClick={handleLogin}>Login<span className="ms-2">{loginIcon}</span></Button>

                                </div>
                        }
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;