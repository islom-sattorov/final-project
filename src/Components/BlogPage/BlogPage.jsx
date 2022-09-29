import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogAdded, selectAllBlogs } from '../../features/blog/blogSlice';
import BlogItems from './BlogItems';
import style from './BlogPage.module.scss';

const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const BlogPage = () => {
    const blogs = useSelector(selectAllBlogs);
    const dispatch = useDispatch();

    const login = useSelector((state) => state.login.loginStatus);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [pic, setPic] = useState('');

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onCategoryChanged = e => setCategory(e.target.value);
    const onPicChanged = e => setPic(e.target.value);

    const onSaveBlogClicked = () => {
        if (title && content && category && pic) {
            dispatch(
                blogAdded(title, content, category, pic)
            )

            setTitle('');
            setContent('');
            setCategory('');
            setPic('');

            setOpen(false)
        }
    }

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
        <>
            <section className={style.blog_page}>
                <div className="container">
                    <h2
                        className={style.blog_page_title}>Blog</h2>
                    <div className={style.blog_page_grid}>
                        {renderedBlogs}
                    </div>
                </div>
                {login ? <button className={style.modal_btn} onClick={handleOpen}>Add</button> : <></>}
            </section>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleBox}>
                    <form className={style.add_form}>
                        <label className={style.add_label} htmlFor='blogTitle'>Blog Title:</label>
                        <TextField
                            type='text'
                            value={title}
                            id="blogTitle"
                            label="Title"
                            variant="outlined"
                            onChange={onTitleChanged} />
                        <TextField
                            type='text'
                            value={content}
                            id="blogContent"
                            label="Content"
                            variant="outlined"
                            onChange={onContentChanged} />
                        <TextField
                            type='text'
                            value={category}
                            id="blogCategory"
                            label="Category"
                            variant="outlined"
                            onChange={onCategoryChanged} />
                        <TextField
                            type='text'
                            value={pic}
                            id="blogPic"
                            label="Picture"
                            variant="outlined"
                            onChange={onPicChanged} />
                        <button className={style.add_btn} type='button' onClick={onSaveBlogClicked}>Save Blog</button>
                    </form>
                </Box>
            </Modal>
        </>

    )
}
export default BlogPage