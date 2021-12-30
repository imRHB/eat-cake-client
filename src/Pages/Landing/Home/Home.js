import React from 'react';
import Cakes from "../../Cakes/Cakes/Cakes";
import ContactForm from "../../ContactForm/ContactForm";
import Banner from "../Banner/Banner";
import Category from "../Featured/Category/Category";
import Testimonials from "../Testimonials/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Cakes />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;