import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";



function Counter(props) {
  const {value,incriment,decriment} = props
  return (
    <div>
      <button onClick={incriment}>incriment</button>
      <h3>{value}</h3>
      <button onClick={decriment}>decriment</button>

    </div>
  );
}


import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
  value: 0,
};

const appReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "incriment":
      return {
        ...prevState,
        value: prevState.value + 1,
      };
    case "decriment":
      return {
        ...prevState,
        value: prevState.value - 1,
      };

    default:
      return prevState;
  }
};

const store = createStore(appReducer);
// const state = store.getState();
// store.subscribe(()=>{
//   console.log(store.getState());

// })
// console.log(state);

const CounterWrapper = () => {
  // Access the value from Redux state
  const value = useSelector((state) => state.value);

  // Get the dispatch function to trigger actions
  const dispatch = useDispatch();

  return (
    <Counter
      value={value}
      incriment={() => {
        store.dispatch({
          type: "incriment",
        });
      }}
      decriment={() => {
        store.dispatch({
          type: "decriment",
        });
      }}
    />
  );
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <CounterWrapper />
    </Provider>
  </StrictMode>
);
