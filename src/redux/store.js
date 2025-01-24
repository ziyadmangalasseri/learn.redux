import { createStore } from "redux"

const initialState = {
    value:0
}

const appReducer = (prevState=initialState,action) => {
    switch(action.type){
        case "incriment" : 
        return {
            ...prevState,
            value:prevState.value + 1
        }
        case "decriment" : 
        return {
            ...prevState,
            value:prevState.value - 1
        }
        default :
        return prevState
    }
}

const store = createStore(appReducer)

export default store;