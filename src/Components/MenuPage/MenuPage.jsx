import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../features/menu/menuSlice";
import style from './MenuPage.module.scss';

const MenuPage = () => {
    const dispatch = useDispatch();

    const { menus, loading } = useSelector((state) => state.menu)



    const renderedItems = menus.map((item, idx) => {
        return (
            <div key={idx} className={style.menulist_items}>
                <h2 className={style.menulist_name} >{item.menuname}</h2>
                <img className={style.menulist_pic} src={item.images[0]} />
                <p className={style.menulist_content}>{item.description}</p>
            </div>
        )
    })




    useEffect(() => {
        dispatch(getMenu())
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
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