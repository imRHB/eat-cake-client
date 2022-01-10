import React from 'react';
import ContactForm from "../../ContactForm/ContactForm";
import Banner from "../Banner/Banner";
import FeaturedCakes from "../Featured/FeaturedCakes/FeaturedCakes";
import FlavoredCakes from "../Featured/Flavors/FlavoredCakes/FlavoredCakes";
import Testimonials from "../Testimonials/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <FlavoredCakes />
            <FeaturedCakes />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;