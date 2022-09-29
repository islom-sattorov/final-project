import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        pic: 'https://cdn.dodostatic.net/static/Img/Products/2c771144e0e641918fefc0cbac28a5fd_1875x1875.jpeg',
        category: 'Delicious',
        title: 'The Legend Of Us Cuisine: The Story Of Hungry People',
        content: 'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'
    },
    {
        id: 2,
        pic: 'https://cdn.dodostatic.net/static/Img/Products/2c771144e0e641918fefc0cbac28a5fd_1875x1875.jpeg',
        category: 'Cooking',
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
            prepare(title, content, category, pic, authorId) {
                return {
                    payload: {
                        id: nanoid(),
                        pic,
                        title,
                        content,
                        category,
                        authorId,
                    }
                }
            }
        }
    }
})

export const selectAllBlogs = (state) => state.blog;

export const { blogAdded } = blogSlice.actions;

export default blogSlice.reducer