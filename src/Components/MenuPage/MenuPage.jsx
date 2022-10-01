import { useEffect, useState } from "react";
import style from './MenuPage.module.scss';

const MenuPage = () => {
    const [data, setData] = useState([]);


    const url = 'https://foodbukka.herokuapp.com/api/v1/menu';

    const getData = async () => {
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
            setData(responseJson && responseJson.Result)
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const renderedItems = data.map((item, idx) => {
        return (
            <div className={style.menulist_items}>
                <h2 className={style.menulist_name} >{item.menuname}</h2>
                <img className={style.menulist_pic} src={item.images[0]} />
                <p className={style.menulist_content}>{item.description}</p>
            </div>
        )
    })

    useEffect(() => {
        getData()
    }, [])


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