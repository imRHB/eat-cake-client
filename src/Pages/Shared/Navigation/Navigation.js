import { faSignInAlt, faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";

const userIcon = <FontAwesomeIcon icon={faUserCircle} />;
const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const Navigation = () => {
    // const { user, logout } = useAuth();

    const handleLogin = () => {
        console.log("login clicked");
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand>
                    <img src="" alt="" style={{ width: 'auto', height: '56px', padding: '4px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
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