import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllBlogs } from '../../features/blog/blogSlice';
import style from './Blog.module.scss';

const Blog = () => {
    const blogs = useSelector(selectAllBlogs);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

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
                        {/* <BlogItems
                            category={blogs[0].category}
                            // pic={blogs[0].pic}
                            title={blogs[0].title}
                            content={blogs[0].content}
                        />
                        <BlogItems
                            category={blogs[1].category}
                            // pic={blogs[0].pic}
                            title={blogs[1].title}
                            content={blogs[1].content}
                        /> */}
                    </div>
                    <Link style={{ color: 'red' }} to='/blog' onClick={handleClick}>See more</Link>
                </div>
            </div>
        </section>
    )
}

export default Blog