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
                <Box sx={{ p: 3 }}>
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
                {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Log In" {...a11yProps(0)} />
                    <Tab label="Registration" {...a11yProps(1)} />
                </Tabs>
                {/* </Box> */}
                <TabPanel value={value} index={0}>
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
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h2>Registration</h2>
                </TabPanel>
            </Box>
        </Modal>
    )
}

export default HeaderModal

