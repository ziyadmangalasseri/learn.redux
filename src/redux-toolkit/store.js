import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./valueReducer"

const store = configureStore({
    reducer:{
        value:valueReducer
    }
})

export default store;