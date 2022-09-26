import style from './Carousel.module.scss';

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

export default Client