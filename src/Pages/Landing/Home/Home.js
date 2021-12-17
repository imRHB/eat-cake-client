import React from 'react';
import Cakes from "../../Cakes/Cakes/Cakes";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Category from "../Featured/Category/Category";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Category />
            <Cakes />
        </div>
    );
};

export default Home;