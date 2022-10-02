import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, reserve: false },
    { id: 2, reserve: true },
    { id: 3, reserve: false },
    { id: 4, reserve: false },
    { id: 5, reserve: false },
    { id: 6, reserve: true },
    { id: 7, reserve: true },
    { id: 8, reserve: true },
    { id: 9, reserve: false },
    { id: 10, reserve: true },
    { id: 11, reserve: false },
    { id: 12, reserve: true },
]

const terraceSlice = createSlice({
    name: 'terrace',
    initialState,
    reducers: {}
})

export const selectAllTerrace = (state) => state.terrace

export default terraceSlice.reducer