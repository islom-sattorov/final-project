import { createSlice } from "@reduxjs/toolkit";



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'udayogra-indian-restaurants-menu-v1.p.rapidapi.com'
    }
}
const menu_URL = 'https://udayogra-indian-restaurants-menu-v1.p.rapidapi.com/dl?area=koramangala&city=bangalore';




const initialState = {
    menu: [],
    status: 'idle',
    error: 'null'
}




const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuAdded: {
            reducer(state, action) {

            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
    }
})

export const selectAllMenus = (state) => state.menu.menu

export const { menuAdded } = menuSlice.actions

export default menuSlice.reducer