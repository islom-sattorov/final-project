import { Link } from 'react-router-dom'
import pic from '../../assets/main_pic.jpg'
import style from './Main.module.scss'

const Main = () => {
    return (
        <main className={style.main}>
            <div className='container'>
                <div className={style.main_flex}>
                    <div className={style.main_text}>
                        <h2 className={style.main_title}>Welcome to
                            <br />28 Monkeys</h2>
                        <p className={style.main_subtitle}>The people, food and the prime locations make the perfect
                            <br /> place good friends & family to come together and have great time.</p>
                        <Link className={style.main_btn} to='/menu'>View Menu</Link>
                    </div>
                    <img className={style.main_pic} src={pic} alt='pic' />
                </div>
            </div>
        </main>
    )
}

export default Main