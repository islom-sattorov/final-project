import style from './Blog.module.scss';

const BlogPreview = ({ pic, category, title, cont }) => {
    return (
        <div className={style.preview}>
            <img src={pic} className={style.preview_pic} alt='blog_pic' />
            <span className={style.preview_category}>{category}</span>
            <h3 className={style.preview_title}>{title}</h3>
            <p className={style.preview_content}>{cont}</p>
        </div>
    )
}

export default BlogPreview



