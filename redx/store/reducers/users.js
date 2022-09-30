import { CREATEUSER,ADDFAVORITES, REMOVEFAVORITES } from "../actions"

const initialState = {
    users: [
        {
            name: 'Daler',
            surname: 'Kamolov',
            age: 22
        },
        {
            name: 'Bahrom',
            surname: 'Sattorov',
            age: 21
        },
    ],
    favorites: [],
    value: '',
}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEUSER:
            return { ...state, users: [...state.users, action.payload] }
        case ADDFAVORITES:
            return { ...state, favorites: [...state.favorites, action.payload] }
        case REMOVEFAVORITES:
            return { ...state, favorites: state.favorites.filter((item) => item.name != action.payload) }
        default:
            return state;
    }
}