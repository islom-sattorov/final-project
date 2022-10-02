import { useDispatch, useSelector } from "react-redux";
import { selectAllTerrace } from "../../features/terrace/terraceSlice";
import style from './ReservePage.module.scss';

const Terrace = () => {
    const terrace = useSelector(selectAllTerrace);
    const dispatch = useDispatch();

    const renderedTerrace = terrace.map((item, idx) => {
        return (
            <button
                key={item.id}
                onClick={() => {
                    if (!item.reserve) {
                        console.log(1)
                    } else {
                        alert('This table already reserved')
                    }
                }}
                className={item.reserve ? style.terrace_not_reserved : style.terrace_reserved}>{item.id}</button>
        )
    })

    return (
        <section className={style.terrace}>
            <div className="container">
                <h1>Terrace</h1>
                <div className={style.terrace_grid}>
                    {renderedTerrace}
                </div>
            </div>
        </section>
    )
}

export default Terrace