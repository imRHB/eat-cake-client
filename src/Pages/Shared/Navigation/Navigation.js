import { faSignInAlt, faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from './Navigation.module.css';

const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const Navigation = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand>
                    <img src="" alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`${'me-auto'} ${styles.navbarNav}`}>
                        <Link to="home">Home</Link>
                        <Link to="cake">Cake</Link>
                        <Link to="blogs">Blogs</Link>
                        <Link to="contact">Contact</Link>
                    </Nav>
                    <Nav>
                        {
                            user?.email ? <div className={`${'d-lg-flex align-items-center justify-content-center my-2 my-lg-0'} ${styles.navbarNav}`}>

                                <Link to="dashboard">Dashboard</Link>
                                <h5 className="mx-0 mx-lg-3 mb-3 my-lg-auto text-success fw-bold m-0">
                                    {
                                        user.photoURL ? <img src={user.photoURL} alt="" className="mx-2" style={{ width: '42px', borderRadius: '50%', padding: '2px', border: '1px solid gray' }} />
                                            :
                                            <span className="fs-4 mx-2">{userIcon}</span>
                                    }
                                    {user.displayName}</h5>
                                <Button
                                    variant="dark"
                                    className="ms-2"
                                    onClick={logout}
                                >Logout<span className="ms-2">{logoutIcon}</span>
                                </Button>
                            </div>
                                :
                                <div className="">
                                    <Button
                                        variant="primary"
                                        className="ms-2" onClick={handleLogin}>Login<span className="ms-2">{loginIcon}</span>
                                    </Button>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;