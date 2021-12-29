import React from 'react';
import Cakes from "../../Cakes/Cakes/Cakes";
import Banner from "../Banner/Banner";
import Category from "../Featured/Category/Category";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Cakes />
        </div>
    );
};

export default Home;