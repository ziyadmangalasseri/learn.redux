import { createStore } from "redux";

// const initialState = {
//   vlaue: 0,
// };
const appReducer = (prevState = initialState, action) => {
//   return prevState;
};
const store = createStore(appReducer);
const state = store.getState();

console.log(state);


// document.getElementById("value").innerText=state.vlaue;


// document.getElementById("incriment").onclick = ()=> {
//     console.log("incriment");
    
// }
// document.getElementById("decriment").onclick = ()=> {
//     console.log("decriment");
    
// }