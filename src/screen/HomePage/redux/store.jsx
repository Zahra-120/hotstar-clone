import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

const store = configureStore({
    reducer : {
        movies : cardSlice
    }
})

export default store;