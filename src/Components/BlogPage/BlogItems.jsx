import { formatDistanceToNow, parseISO } from 'date-fns';
import style from './BlogPage.module.scss';

const BlogItems = ({ pic, category, title, content, timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    return (
        <article className={style.blog_page_item}>
            <img className={style.blog_page_pic} src={pic} />
            <span className={style.blog_page_category}>{category}</span>
            <h3 className={style.blog_page_title}>{title}</h3>
            <p className={style.blog_page_content}>{content}</p>
            <span className={style.blog_page_category} title={timestamp}>
                &nbsp; <i>{timeAgo}</i>
            </span>
        </article>
    )
}

export default BlogItems


