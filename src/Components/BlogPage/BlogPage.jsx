import { useDispatch, useSelector } from 'react-redux';
import { selectAllBlogs } from '../../features/blog/blogSlice';
import BlogItems from './BlogItems';
import style from './BlogPage.module.scss';

const BlogPage = () => {
    const blogs = useSelector(selectAllBlogs);
    const dispatch = useDispatch();

    const renderedBlogs = blogs.map((item, idx) => {
        return (
            <BlogItems
                key={idx}
                category={item.category}
                pic={item.pic}
                title={item.title}
                content={item.content}
            />
        )
    })



    return (
        <section className={style.blog_page}>
            <div className="container">
                <div className={style.blog_page_grid}>
                    {renderedBlogs}
                </div>
            </div>
        </section>
    )
}

export default BlogPage