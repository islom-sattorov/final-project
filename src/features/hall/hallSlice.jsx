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
    {
        id: 13,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 14,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 15,
        reserve: true,
        name: 'islom',
        persons: '2',
        time: '12:00',
    },
    {
        id: 16,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 17,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 18,
        reserve: true,
        name: 'islom',
        persons: '2',
        time: '12:00',
    },
    {
        id: 19,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 20,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 21,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 22,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 23,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
    {
        id: 24,
        reserve: false,
        name: '',
        persons: '',
        time: '',
    },
]

const hallSlice = createSlice({
    name: 'hall',
    initialState,
    reducers: {
        reserveTable: (state, action) => {
            const { id, name, person, time } = action.payload;
            state = state.map((item) => {
                if (item.id == id) {
                    item.name = name;
                    item.persons = person
                    item.time = time
                    item.reserve = true
                } else {
                    return item
                }
            })
        }
    }
})


export const selectAllHall = (state) => state.hall;

export const { reserveTable } = hallSlice.actions;

export default hallSlice.reducer













// const hallSlice = createSlice({
//     name: 'hall',
//     initialState,
//     reducers: {
//         reserveTable(state, action) {
//             state = state.map((item) => {
//                 if (item.id == action.payload.id) {
//                     item.name = action.payload.val;
//                     item.reserve = true;
//                 }
//             })
//         },
//         prepare(id, val) {
//             return {
//                 payload: {
//                     id,
//                     val,
//                 }
//             }
//         }
//     }
// })