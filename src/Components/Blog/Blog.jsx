import style from './Blog.module.scss';

const Blog = () => {
    return (
        <section className={style.section}>
            <div className='container'>
                <div className={style.section_flex}>
                    <div className={style.section_text}>
                        <span className={style.section_span}>Blog</span>
                        <h2 className={style.section_title}>Be First Who Read News</h2>
                        <p className={style.section_subtitle}>Explore the latest stories about our dishes, offers,<br />
                            events and future plans here.
                        </p>
                    </div>
                    <div className={style.section_blog}>
                        <h1>test</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog