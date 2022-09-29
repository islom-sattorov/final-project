import BlogAuthor from './BlogAuthor';
import style from './BlogPage.module.scss';

const BlogItems = ({ pic, category, title, content, autId }) => {


    return (
        <article className={style.blog_page_item}>
            <img className={style.blog_page_pic} src={pic} />
            <span className={style.blog_page_category}>{category}</span>
            <h3 className={style.blog_page_title}>{title}</h3>
            <p className={style.blog_page_content}>{content}</p>
            <BlogAuthor authorId={autId} spanClass={style.blog_page_category} />
        </article>
    )
}

export default BlogItems