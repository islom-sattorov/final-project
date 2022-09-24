import style from './Main.module.scss'
import pic from './pic.jpg'

const Main = () => {
    return (
        <main className={style.main}>
            <div className='container'>
                <div className={style.main_flex}>
                    <div className={style.main_text}>
                        <h2 className={style.main_title}>Welcome to
                            <br />Restaurant</h2>
                        <p className={style.main_subtitle}>The people, food and the prime locations make the perfect
                            <br /> place good friends & family to come together and have great time.</p>
                        <button className={style.main_btn}>View Menu</button>
                    </div>
                    <img className={style.main_pic} src={pic} alt='pic' />
                </div>
            </div>
        </main>
    )
}

export default Main