import { GETCARDS,CHANGELOADER,EDITCARD } from "../actions"


const initialState = {
    cardsList: [],
    loading: false,
}

// action = {
//     type: "",
//     paylod: value
// }

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCARDS:
            return { ...state, cardsList: action.payload }
        case CHANGELOADER: 
            return {...state, loading: action.payload};  
        case EDITCARD: 
            return {...state, cardsList: action.payload};      
        default:
            return state;
    }
}

export const getCards = () => {
    return async function (dispatch) {
        try {
            dispatch({type: CHANGELOADER, payload: true})
            const response = await fetch('https://reqres.in/api/users?page=2');
            const responseJSON = await response.json();
            dispatch({type: GETCARDS, payload: responseJSON.data})
            dispatch({type: CHANGELOADER, payload: false})
            
        } catch(e) {
            dispatch({type: CHANGELOADER, payload: false})
            console.log(e);
        }
    }
}