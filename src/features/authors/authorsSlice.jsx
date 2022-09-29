import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Islom Sattorov' },
    { id: '2', name: 'Senior Pomidor' },
    { id: '3', name: 'Shef Povarov' },
]


const authorSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {}
});

export const selectAllAuthors = (state) => state.authors;

export default authorSlice.reducer;