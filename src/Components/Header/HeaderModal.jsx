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
    newUser,
    newUserChange,
    newPassword,
    newPasswordChange,
    newSubmit,
}) => {
    const [value, setValue] = useState(0)
    const [validation, setValidation] = useState({
        username: false,
        password: false,
    })

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
                        <TextField
                            type='text'
                            id="username"
                            label="Username"
                            name='username'
                            variant="outlined"
                            required
                            onChange={userChange}
                        />
                        <TextField
                            type='password'
                            id="password"
                            name='password'
                            label="password"
                            variant="outlined"
                            required
                            onChange={passwordChange}
                        />
                        <button type='button' onClick={submit} className={style.modal_btn}>Log in</button>
                    </form>
                </TabPanel>
                {/* Registration */}
                <TabPanel value={value} index={1}>
                    <form onSubmit={() => { return false }} className={style.modal_form}>
                        <h2 className={style.modal_label}>Registration</h2>
                        <TextField
                            error={validation.username && newUser === ""}
                            helperText={validation.username && newUser === "" ? "field is required" : validation.username && newUser.length < 4 ? 'Username recommend contain more than 4 character' : ''}
                            onBlur={() => setValidation(prev => ({ ...prev, username: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, username: false }))}
                            color={newUser !== '' && newUser.length >= 4 ? 'success' : ''}
                            type='text'
                            value={newUser}
                            id="newUser"
                            name='newUser'
                            label="New User"
                            variant="outlined"
                            required
                            onChange={newUserChange}
                        />
                        <TextField
                            error={validation.password && newPassword === ""}
                            helperText={validation.password && newPassword === "" ? "field is required" : validation.password && newPassword.length < 4 ? 'Password must contain more than 4 character' : ''}
                            onBlur={() => setValidation(prev => ({ ...prev, password: true }))}
                            onFocus={() => setValidation(prev => ({ ...prev, password: false }))}
                            color={newPassword !== '' && newPassword.length >= 4 ? 'success' : ''}
                            type='password'
                            value={newPassword}
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

