import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../features/menu/menuSlice";
import style from './MenuPage.module.scss';

const MenuPage = () => {
    const { menus, loading } = useSelector((state) => state.menu)
    const dispatch = useDispatch();

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
        </>
    )
}

export default MenuPage