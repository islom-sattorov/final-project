import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from './Carousel.module.scss';
import Client from './Client';
import pic from './pic122.png';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className={style.car}>
                <Client
                    pic={pic}
                    name='Jack Sparrow'
                    country='Salt Lake City'
                    description='I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.'
                />
            </div>
            <div>
                <Client
                    pic={pic}
                    name='Natasha D'
                    country='Newyork'
                    description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                />
            </div>
            <div>
                <Client
                    pic={pic}
                    name='Natasha D'
                    country='Newyork'
                    description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                />
            </div>
            <div>
                <Client
                    pic={pic}
                    name='Natasha D'
                    country='Newyork'
                    description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                />
            </div>
            <div>
                <Client
                    pic={pic}
                    name='Natasha D'
                    country='Newyork'
                    description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                />
            </div>
            <div>
                <Client
                    pic={pic}
                    name='Natasha D'
                    country='Newyork'
                    description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                />
            </div>
        </Slider>
    )
}

export default Carousel