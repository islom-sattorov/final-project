import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import arrow from '../../assets/arrow.svg';
import { getMenu } from "../../features/menu/menuSlice";
import style from './MenuPage.module.scss';


const MenuPage = () => {
    const { menus, loading } = useSelector((state) => state.menu)
    const dispatch = useDispatch();

    const [showBtn, setShowBtn] = useState(false);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    window.addEventListener('scroll', () => {
        if (window.scrollY > 420) {
            setShowBtn(true)
        } else {
            setShowBtn(false)
        }
    })

    const btnToTop = showBtn ? <button className="to_top_btn_main" onClick={handleClick}><img className='to_top_btn_main_arrow' src={arrow} alt='to top arrow' /></button> :
        <></>



    const renderedItems = menus.map((item, idx) => {
        return (
            <div key={idx} className={style.menulist_items}>
                <h2 className={style.menulist_name} >{item.menuname}</h2>
                <img className={style.menulist_pic} src={String(idx).includes('0') ?
                    item.images[2] : idx % 2 != 0 ? item.images[1] : idx % 2 == 0 ? item.images[0] : 'not found'} />
                <hr />
                <p className={style.menulist_content}>{item.description}</p>
            </div>
        )
    })


    useEffect(() => {
        dispatch(getMenu())
    }, [])

    if (loading) {
        return <LinearProgress color="success" />
    }

    return (
        <>
            <section className={style.menulist}>
                <div className="container">
                    <h1 className={style.menulist_text}>Menu Page</h1>
                    <div className={style.menulist_grid}>
                        {renderedItems}
                    </div>
                </div>
            </section>
            {btnToTop}
        </>
    )
}

export default MenuPage