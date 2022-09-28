import style from './BlogPage.module.scss';

const BlogItems = (props) => {
    return (
        <article className={style.blog_page_item}>
            <img className={style.blog_page_pic} src={props.pic} />
            <h3 className={style.blog_page_title}>{props.title}</h3>
            <p className={style.blog_page_content}>{props.content}</p>
        </article>
    )
}

export default BlogItems