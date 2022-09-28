import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        pic: 'https://cdn.dodostatic.net/static/Img/Products/2c771144e0e641918fefc0cbac28a5fd_1875x1875.jpeg',
        title: 'The Legend Of Us Cuisine: The Story Of Hungry People',
        content: 'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'
    },
    {
        id: 2,
        pic: 'https://cdn.dodostatic.net/static/Img/Products/2c771144e0e641918fefc0cbac28a5fd_1875x1875.jpeg',
        title: 'The Most Popular Delicious Food of Mediterranean Cuisine',
        content: 'Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.',
    }
]

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        blogAdded: {
            reducer(state, action) {
                state.unshift(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    }
                }
            }
        }
    }
})

export const selectAllBlogs = (state) => state.blog;

export const { postAdded } = blogSlice.actions;

export default blogSlice.reducer