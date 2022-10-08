import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blog/blogSlice';
import boxStyleReducer from "../features/boxStyle/boxStyleSlice";
import hallReducer from '../features/hall/hallSlice';
import loginReducer from '../features/login/loginSlice';
import menuReducer from '../features/menu/menuSlice';
import notificationReducer from "../features/notification/notificationSlice";
import terraceReducer from "../features/terrace/terraceSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        blog: blogReducer,
        hall: hallReducer,
        menu: menuReducer,
        terrace: terraceReducer,
        boxStyle: boxStyleReducer,
        notification: notificationReducer,
    }
})