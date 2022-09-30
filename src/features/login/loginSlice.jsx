import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStatus: {
        username: 'admin',
        password: 'admin',
        status: false,
    },
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        statusToggle: (state) => {
            state.loginStatus.status = true;
        },
        statusFalse: (state) => {
            state.loginStatus.status = false
        }
    }
})

export const { statusToggle, statusFalse } = loginSlice.actions;

export default loginSlice.reducer;