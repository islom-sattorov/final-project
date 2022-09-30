import { combineReducers } from "redux";
import { cardsReducer } from "./cards";
import { loginReducer } from "./login";
import { testReducer } from "./test";
import { userReducer } from "./users";


export const reducers = combineReducers({
    test: testReducer,
    login: loginReducer,
    user: userReducer,
    cards: cardsReducer,
})