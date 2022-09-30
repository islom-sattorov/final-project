import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: 1,
        pic: 'https://cdn.dodostatic.net/static/Img/Products/2c771144e0e641918fefc0cbac28a5fd_1875x1875.jpeg',
        category: 'Delicious',
        title: 'The Legend Of Us Cuisine: The Story Of Hungry People',
        content: 'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: 2,
        pic: 'https://cdn.dodostatic.net/static/Img/Products/2c771144e0e641918fefc0cbac28a5fd_1875x1875.jpeg',
        category: 'Cooking',
        title: 'The Most Popular Delicious Food of Mediterranean Cuisine',
        content: 'Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
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
            prepare(title, content, category, pic,) {
                return {
                    payload: {
                        id: nanoid(),
                        pic,
                        title,
                        content,
                        date: new Date().toISOString(),
                        category,
                    }
                }
            }
        }
    }
})

export const selectAllBlogs = (state) => state.blog;

export const { blogAdded } = blogSlice.actions;

export default blogSlice.reducer