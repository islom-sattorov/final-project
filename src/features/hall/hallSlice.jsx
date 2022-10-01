import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, reserve: false },
    { id: 2, reserve: false },
    { id: 3, reserve: false },
    { id: 4, reserve: true },
    { id: 5, reserve: false },
    { id: 6, reserve: false },
    { id: 7, reserve: true },
    { id: 8, reserve: false },
    { id: 9, reserve: false },
    { id: 10, reserve: false },
    { id: 11, reserve: true },
    { id: 12, reserve: false },
    { id: 13, reserve: false },
    { id: 14, reserve: false },
    { id: 15, reserve: true },
    { id: 16, reserve: false },
    { id: 17, reserve: false },
    { id: 18, reserve: true },
    { id: 19, reserve: false },
    { id: 20, reserve: false },
    { id: 21, reserve: false },
    { id: 22, reserve: false },
    { id: 23, reserve: false },
    { id: 24, reserve: false },
]

const hallSlice = createSlice({
    name: 'hall',
    initialState,
    reducers: {

    }
})


export const selectAllHall = (state) => state.hall;

export default hallSlice.reducer