import { formatDistanceToNow, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/blog/blogSlice';
import ReactionButtons from '../../features/blog/ReactionButtons';
import style from './BlogPage.module.scss';

const BlogItems = ({ pic, category, title, content, timestamp, item, id, authorId }) => {
    const login = useSelector((state) => state.login.loginStatus);
    const dispatch = useDispatch();



    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }


    return (
        <article className={style.blog_page_item}>
            {!login ?
                <button
                    onClick={() => dispatch(removeItem(id))}
                    className={style.blog_page_delete}>X</button> :
                <></>
            }
            <img className={style.blog_page_pic} src={pic} />
            <span className={style.blog_page_category}>{category}</span>
            <h3 className={style.blog_page_title}>{title}</h3>
            <p className={style.blog_page_content}>{content}</p>
            <p className={style.blog_page_content}>{authorId}</p>
            <span className={style.blog_page_category} title={timestamp}>
                &nbsp; <i>{timeAgo}</i></span>
            <ReactionButtons blog={item} />
        </article>
    )
}

export default BlogItems


