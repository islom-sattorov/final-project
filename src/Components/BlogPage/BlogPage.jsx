import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogAdded, selectAllBlogs } from '../../features/blog/blogSlice';
import { selectAllBoxStyle } from '../../features/boxStyle/boxStyleSlice';
import { addNotification } from '../../features/notification/notificationSlice';
import BlogItems from './BlogItems';
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


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [pic, setPic] = useState('');
    const [category, setCategory] = useState('')
    const [open, setOpen] = useState(false)
    const [validation, setValidation] = useState({
        name: false,
        content: false,
        pic: false,
        category: false,
    })


    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onCategoryChanged = e => setCategory(e.target.value);
    const onPicChanged = e => setPic(e.target.value);



    const onSaveBlogClicked = () => {
        if (title && content && category && pic) {
            dispatch(
                blogAdded(title, content, category ? category : '', pic)
            )
            dispatch(addNotification({ type: true, message: `Your blog added` }))


            setTitle('');
            setContent('');
            setCategory('');
            setPic('');
            setOpen(false)
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(category) && Boolean(pic);

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
                        className={style.blog_page_title}>Blog</h2>
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
                            error={validation.name && title === ""}
                            helperText={validation.name && title === "" ? "field is required" : ""}
                            onBlur={() => setValidation(prev => ({ ...prev, name: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, name: false }))}
                            type='text'
                            value={title}
                            id="blogTitle"
                            label="Title"
                            variant="outlined"
                            onChange={onTitleChanged} />
                        <TextField
                            error={validation.content && content === ""}
                            helperText={validation.content && content === "" ? "field is required" : ""}
                            onBlur={() => setValidation(prev => ({ ...prev, content: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, content: false }))}
                            type='text'
                            value={content}
                            id="blogContent"
                            label="Content"
                            variant="outlined"
                            onChange={onContentChanged} />
                        <TextField
                            error={validation.category && category === ""}
                            helperText={validation.category && category === "" ? "field is required" : ""}
                            onBlur={() => setValidation(prev => ({ ...prev, category: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, category: false }))}
                            id="outlined-select-category"
                            select
                            label="Select"
                            value={category}
                            onChange={onCategoryChanged}
                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            error={validation.pic && pic == ''}
                            helperText={validation.pic && pic === '' ? 'Insert a link to the picture(URL)' : ''}
                            onBlur={() => setValidation(prev => ({ ...prev, pic: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, pic: false }))}
                            type='text'
                            value={pic}
                            id="blogPic"
                            label="Picture"
                            variant="outlined"
                            onChange={onPicChanged} />
                        <button disabled={!canSave} className={style.add_btn} type='button' onClick={onSaveBlogClicked}>Save Blog</button>
                    </form>
                </Box>
            </Modal>
        </>

    )
}
export default BlogPage