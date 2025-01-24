import { createStore } from "redux"

const initialState = {
    value : 0
}

const appReducer = (preventState = initialState,action) => {

}
const store = createStore(appReducer)