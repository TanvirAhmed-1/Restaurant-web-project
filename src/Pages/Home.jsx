import React from 'react';
import NavCarousel from '../components/NavCarousel';
import Slider from '../components/Slider';
import Card from '../components/Card';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <section>
                <NavCarousel></NavCarousel>
            </section>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <Card></Card>
            </section>
            <section>
                <Menu></Menu>
            </section>
        </div>
    );
};

export default Home;