import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStatus: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginToggle: (state) => {
            state.loginStatus = !state.loginStatus;
        }
    }
})

export const { loginToggle } = loginSlice.actions;

export default loginSlice.reducer;