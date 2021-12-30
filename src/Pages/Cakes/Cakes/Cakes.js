import React, { useEffect, useState } from 'react';
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import Cake from "../Cake/Cake";

const Cakes = () => {
    const [cakes, setCakes] = useState([]);


    // const [current, setCurrent] = useState('button1');
    // console.log(current);
    // const handleClick = (current) => {
    //     setCurrent(current);
    // }


    useEffect(() => {
        fetch('http://localhost:5000/cake')
            .then(res => res.json())
            .then(result => setCakes(result));
    }, [])

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center my-5 fw-bold">Top Selling</h2>
                <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        cakes.map(cake => <Cake
                            key={cake._id}
                            cake={cake}
                        ></Cake>)
                    }
                </Row>

                {/* <div className="my-5">
                    <Tabs defaultActiveKey="profile" className="mb-3">
                        <Tab eventKey="home" title="Home">
                            <p>home</p>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <p>profile</p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <p>contact</p>
                        </Tab>
                    </Tabs>
                </div> */}
            </Container>

            {/* <Container className="my-5">
                <button onClick={() => handleClick('button1')}>button 1</button>
                <button onClick={() => handleClick('button2')}>button 2</button>
                <button onClick={() => handleClick('button3')}>button 3</button>

                <div>
                    {`${current}`}
                </div>

            </Container> */}
        </div>
    );
};

export default Cakes;