import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 2,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 3,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 4,
        reserve: true,
        name: 'islom',
        persons: '2',
        time: '12:00',
    },
    {
        id: 5,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 6,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 7,
        reserve: true,
        name: 'islom',
        persons: '2',
        time: '12:00',
    },
    {
        id: 8,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 9,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 10,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 11,
        reserve: true,
        name: 'islom',
        persons: '2',
        time: '12:00',
    },
    {
        id: 12,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
]

const terraceSlice = createSlice({
    name: 'terrace',
    initialState,
    reducers: {
        reserveTable: (state, action) => {
            const { id, name, person, time, reserve } = action.payload;
            state = state.map((item) => {
                if (item.id === id) {
                    item.name = name;
                    item.persons = person
                    item.time = time
                    item.reserve = reserve
                } else {
                    return item
                }
            })
        },
        removeReserveTable: (state, action) => {
            const id = action.payload;
            state = state.map((item) => {
                if (item.id == id) {
                    item.name = '';
                    item.persons = '';
                    item.time = '';
                    item.reserve = false;
                    console.log(item)
                } else {
                    return item
                }
            })
        }
    }
})

export const selectAllTerrace = (state) => state.terrace

export const { reserveTable, removeReserveTable } = terraceSlice.actions;

export default terraceSlice.reducer