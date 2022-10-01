import { useSelector } from "react-redux";
import { selectAllHall } from "../../features/hall/hallSlice";
import style from './ReservePage.module.scss';

const Hall = () => {
    const hall = useSelector(selectAllHall);

    const renderedHall = hall.map((item, idx) => {
        return (
            <button className={item.reserve ? style.hall_not_reserved : style.hall_reserved}>{item.id}</button>
        )
    })

    return (
        <section className={style.hall}>
            <div className="container">
                <h1>hall</h1>
                <div className={style.hall_item}>
                    {renderedHall}
                </div>
            </div>
        </section>
    )
}


export default Hall