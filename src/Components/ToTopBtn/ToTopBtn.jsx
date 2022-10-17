import { useState } from "react";
import arrow from '../../assets/arrow.svg';

const ToTopBtn = () => {
    const [showBtn, setShowBtn] = useState(() => false);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    window.addEventListener('scroll', () => {
        if (window.scrollY > 420) {
            setShowBtn(() => true)
        } else {
            setShowBtn(() => false)
        }
    })

    const btnToTop = showBtn && <button className="to_top_btn_main" onClick={handleClick}><img className='to_top_btn_main_arrow' src={arrow} alt='to top arrow' /></button>

    return (
        <div>{btnToTop}</div>
    )
}

export default ToTopBtn