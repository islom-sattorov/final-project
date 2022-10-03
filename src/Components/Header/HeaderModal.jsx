import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import style from './Header.module.scss';

const HeaderModal = ({
    open,
    close,
    bxs,
    userChange,
    passwordChange,
    submit,
}) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={bxs}>
                <form onSubmit={() => { return false }} className={style.modal_form}>
                    <label htmlFor='username' className={style.modal_label}>UserName</label>
                    <TextField
                        type='text'
                        // value={content}
                        id="username"
                        label="Username"
                        name='username'
                        variant="outlined"
                        required
                        onChange={userChange}
                    />
                    <label className={style.modal_label} htmlFor='password'>Password</label>
                    <TextField
                        type='password'
                        // value={content}
                        id="password"
                        name='password'
                        label="password"
                        variant="outlined"
                        required
                        onChange={passwordChange}
                    />
                    <button type='button' onClick={submit} className={style.modal_btn}>Send</button>
                </form>
            </Box>
        </Modal>
    )
}

export default HeaderModal