import React from 'react';
import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import BlackForestFlavor from "../BlackForestFlavor/BlackForestFlavor";
import ChocolateFlavor from "../ChocolateFlavor/ChocolateFlavor";
import StrawberryFlavor from "../StrawberryFlavor/StrawberryFlavor";

const FlavoredCakes = () => {
    const [key, setKey] = useState('chocolate');

    return (
        <div className="my-5">
            <Container>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-center"
                >
                    <Tab eventKey="chocolate" title="Chocolate">
                        <ChocolateFlavor />
                    </Tab>
                    <Tab eventKey="strawberry" title="Strawberry">
                        <StrawberryFlavor />
                    </Tab>
                    <Tab eventKey="black-forest" title="Black Forest">
                        <BlackForestFlavor />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};

export default FlavoredCakes;