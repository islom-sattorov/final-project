import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    menus: [],
    error: '',
}

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
    try {
        const url = 'https://foodbukka.herokuapp.com/api/v1/menu';
        const request = await fetch(url);
        const requestJson = await request.json();
        const menuFetch = await requestJson.Result()
    }
    catch (err) {
        console.log(err)
    }
})



const menuSlice = createSlice({
    name: 'menu',
    initialState,
});