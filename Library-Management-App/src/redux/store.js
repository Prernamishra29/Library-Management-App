import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import authReducer from "./reducers/authReducer";
import bookReducer from "./reducers/bookReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        book: bookReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
