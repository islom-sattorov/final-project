import { DECREMENT, INCREMENT, INCREMENTVALUE } from "../actions";


const initialState = {
    count: 0,
    openModal: false,
    name: "",
    role: "",
}

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case INCREMENTVALUE:
            return { ...state, count: state.count + action.payload };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
} 