import React from 'react';
import ContactForm from "../../ContactForm/ContactForm";
import Banner from "../Banner/Banner";
import Category from "../Featured/Category/Category";
import FeaturedCakes from "../Featured/FeaturedCakes/FeaturedCakes";
import Testimonials from "../Testimonials/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <FeaturedCakes />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;