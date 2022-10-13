import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    menus: [],
    error: '',
}


export const getMenu = createAsyncThunk('menu/getMenu', async () => {
    try {
        const url = 'https://foodbukka.herokuapp.com/api/v1/menu';
        const request = await fetch(url)
        const requestJson = await request.json();
        const menuData = await requestJson.Result;
        return menuData

    }
    catch (e) {
        console.log(e)
    }
})







const menuSlice = createSlice(({
    name: 'menus',
    initialState,
    extraReducers: {
        [getMenu.pending]: (state, action) => {
            state.loading = true
        },
        [getMenu.fulfilled]: (state, action) => {
            state.loading = false
            state.menus = action.payload
        },
        [getMenu.rejected]: (state, action) => {
            state.loading = false
        },
    },
}));


export default menuSlice.reducer;


