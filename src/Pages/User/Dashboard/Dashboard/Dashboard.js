import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="my-5">
            <Container>
                <h3 className="text-center fw-bold">Dashboard</h3>
            </Container>

            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-3 g-lg-4">
                        <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                            <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="light" className="flex-column dash-nav">

                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">

                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;