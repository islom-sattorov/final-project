import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogAdded, removeItem, selectAllBlogs } from '../../features/blog/blogSlice';
import ReactionButtons from '../../features/blog/ReactionButtons';
import { selectAllBoxStyle } from '../../features/boxStyle/boxStyleSlice';
import { addNotification } from '../../features/notification/notificationSlice';
import style from './BlogPage.module.scss';

const categories = [
    {
        value: 'Cooking',
        label: 'Cooking'
    },
    {
        value: 'Delicious',
        label: 'Delicious',
    },
    {
        value: 'Tips',
        label: 'Tips',
    },
]

const BlogPage = () => {
    const login = useSelector((state) => state.login.loginStatus);
    const boxStyle = useSelector(selectAllBoxStyle);
    const blogs = useSelector(selectAllBlogs);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        pic: '',
        category: '',
    })
    const [validation, setValidation] = useState({
        name: false,
        content: false,
        pic: false,
        category: false,
    })
    const [open, setOpen] = useState(() => false)

    const handleOpen = useCallback(() => setOpen(true))
    const handleClose = () => useCallback(setOpen(false))
    const onFormChanged = e => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const onSaveBlogClicked = useCallback(() => {
        if (formData.title && formData.content && formData.category && formData.pic) {
            dispatch(
                blogAdded(formData.title, formData.content, formData.category ? formData.category : '', formData.pic)
            )
            dispatch(addNotification({ type: true, message: `Your blog added` }))
            setFormData({
                title: '',
                content: '',
                pic: '',
                category: '',
            })
            setOpen(() => false)
            // Validation default after submit
            setValidation({
                name: false,
                content: false,
                pic: false,
                category: false,
            })
        }
    })

    const canSave = Boolean(formData.title) && Boolean(formData.content) && Boolean(formData.category) && Boolean(formData.pic);

    const renderedBlogs = blogs.map((item, idx) => {
        return (
            <BlogItems
                key={idx}
                category={item.category}
                pic={item.pic}
                title={item.title}
                content={item.content}
                timestamp={item.date}
                item={item}
                id={item.id}
            />
        )
    })
    return (
        <>
            <section className={style.blog_page}>
                <div className="container">
                    <h2
                        className={style.blog_page_title_main}>Blog</h2>
                    <div className={style.blog_page_grid}>
                        {renderedBlogs}
                    </div>
                </div>
                {login.status ? <button className={style.modal_btn} onClick={handleOpen}>+</button> : <></>}
            </section>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <form className={style.add_form}>
                        <label className={style.add_label} htmlFor='blogTitle'>Blog Title:</label>
                        <TextField
                            error={validation.name && formData.title === ""}
                            helperText={validation.name && formData.title === "" ? "field is required" : ""}
                            onBlur={() => setValidation(prev => ({ ...prev, name: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, name: false }))}
                            type='text'
                            value={formData.title}
                            name='title'
                            id="blogTitle"
                            label="Title"
                            variant="outlined"
                            onChange={onFormChanged} />
                        <TextField
                            error={validation.content && formData.content === ""}
                            helperText={validation.content && formData.content === "" ? "field is required" : ""}
                            onBlur={() => setValidation(prev => ({ ...prev, content: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, content: false }))}
                            type='text'
                            name='content'
                            value={formData.content}
                            id="blogContent"
                            label="Content"
                            variant="outlined"
                            onChange={onFormChanged} />
                        <TextField
                            error={validation.category && formData.category === ""}
                            helperText={validation.category && formData.category === "" ? "field is required" : ""}
                            onBlur={() => setValidation(prev => ({ ...prev, category: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, category: false }))}
                            id="outlined-select-category"
                            select
                            label="Select"
                            value={formData.category}
                            name='category'
                            onChange={onFormChanged}
                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            error={validation.pic && formData.pic === ''}
                            helperText={validation.pic && formData.pic === '' ? 'Insert a link to the picture(URL)' : ''}
                            onBlur={() => setValidation(prev => ({ ...prev, pic: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, pic: false }))}
                            type='text'
                            value={formData.pic}
                            name='pic'
                            id="blogPic"
                            label="Picture"
                            variant="outlined"
                            onChange={onFormChanged} />
                        <button disabled={!canSave} className={style.add_btn} type='button' onClick={onSaveBlogClicked}>Save Blog</button>
                    </form>
                </Box>
            </Modal>
        </>

    )
}
export default BlogPage

const BlogItems = ({ pic, category, title, content, timestamp, item, id }) => {
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
            {login.status ?
                <button
                    onClick={() => {
                        dispatch(removeItem(id),
                            dispatch(addNotification({ type: true, message: "Blog removed" }))
                        )
                    }}
                    className={style.blog_page_delete}>X</button> :
                <></>
            }
            <img alt="test" className={style.blog_page_pic} src={pic} />
            <span className={style.blog_page_category}>{category}</span>
            <h3 className={style.blog_page_title}>{title}</h3>
            <p className={style.blog_page_content}>{content}</p>
            <span className={style.blog_page_category} title={timestamp}>
                &nbsp; <i>{timeAgo}</i></span>
            <ReactionButtons blog={item} />
        </article>
    )
}
