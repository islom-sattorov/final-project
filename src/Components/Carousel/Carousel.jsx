import { useEffect, useState } from 'react';
import style from './Carousel.module.scss';

const data = ['1', '2', '3', '4'];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)


    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
        // 
        return () => clearInterval(interval);
    })


    return (
        <>
            <div className={style.carousel_container}>

                {data.map((item, idx) => {
                    return <h1 className={style.carousel_item}
                        style={{ transform: `translate(-${currentIndex * 100}%)` }}
                        key={idx}
                    >{item}</h1>
                })}
                {/* <div className={style.carousel_item}>
                    <h1>Item 1</h1>
                </div>

                <div className={style.carousel_item}>
                    <h1>Item 2</h1>
                </div>

                <div className={style.carousel_item}>
                    <h1>Item 3</h1>
                </div> */}

            </div>
        </>
    )
}

export default Carousel