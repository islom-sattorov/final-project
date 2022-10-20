import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import clientPic from '../../assets/client.png';
import style from './Carousel.module.scss';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="container">
                <Slider {...settings}>
                    <div className={style.car}>
                        <Client
                            pic={clientPic}
                            name='Jack Sparrow'
                            country='Salt Lake City'
                            description='I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.'
                        />
                    </div>
                    <div>
                        <Client
                            pic={clientPic}
                            name='Natasha D'
                            country='Newyork'
                            description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                        />
                    </div>
                    <div>
                        <Client
                            pic={clientPic}
                            name='Natasha D'
                            country='Newyork'
                            description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                        />
                    </div>
                    <div>
                        <Client
                            pic={clientPic}
                            name='Natasha D'
                            country='Newyork'
                            description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                        />
                    </div>
                    <div>
                        <Client
                            pic={clientPic}
                            name='Natasha D'
                            country='Newyork'
                            description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                        />
                    </div>
                    <div>
                        <Client
                            pic={clientPic}
                            name='Natasha D'
                            country='Newyork'
                            description='They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
                        />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Carousel

const Client = (props) => {
    return (
        <div className={style.client}>
            <div className={style.client_top}>
                <img className={style.client_pic} src={props.pic} alt='client' />
                <h2 className={style.client_title}>{props.name}</h2>
                <span className={style.client_country}>{props.country}</span>
            </div>
            <hr />
            <p className={style.client_desc}>{props.description}</p>
        </div>
    )
}