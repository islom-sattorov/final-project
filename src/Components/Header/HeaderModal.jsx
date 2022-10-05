import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './Header.module.scss';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 2 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const HeaderModal = ({
    open,
    close,
    bxs,
    userChange,
    passwordChange,
    submit,
    newUserChange,
    newPasswordChange,
    newSubmit,
}) => {
    const [value, setValue] = useState(0)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={bxs}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Log In" {...a11yProps(0)} />
                        <Tab label="Registration" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                {/* Login */}
                <TabPanel value={value} index={0}>
                    <form onSubmit={() => { return false }} className={style.modal_form}>
                        <h2 className={style.modal_label}>Log In</h2>
                        {/* <label htmlFor='username' className={style.modal_label}>UserName</label> */}
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
                        {/* <label className={style.modal_label} htmlFor='password'>Password</label> */}
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
                </TabPanel>
                {/* Registration */}
                <TabPanel value={value} index={1}>
                    <form onSubmit={() => { return false }} className={style.modal_form}>
                        <h2 className={style.modal_label}>Registration</h2>
                        <TextField
                            type='text'
                            // value={content}
                            id="newUser"
                            name='newUser'
                            label="New User"
                            variant="outlined"
                            required
                            onChange={newUserChange}
                        />
                        <TextField
                            type='password'
                            // value={content}
                            id="newPassword"
                            name='newPassword'
                            label="New Password"
                            variant="outlined"
                            required
                            onChange={newPasswordChange}
                        />
                        <button type='button' onClick={newSubmit} className={style.modal_btn}>Submit</button>
                    </form>
                </TabPanel>
            </Box>
        </Modal>
    )
}

export default HeaderModal

