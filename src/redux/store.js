import { createStore, combineReducers, applyMiddleware } from "redux";
import testmiddleware from "./middleware/testmiddleware";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

// const initialState = {
//   value: 0,
//   showName: false,
// };

const appReducer = combineReducers({
  // value:value,
  // showName:showName
  value,
  showName,
  dataInfo,
});

// WHITHOUT COMBINEREDUCERS

// const appReducer = (prevState = initialState, action) => {

//   //   switch (action.type) {
//   //     case "incriment":
//   //       return {
//   //         ...prevState,
//   //         value: prevState.value + 1,
//   //       };
//   //     case "decriment":
//   //       return {
//   //         ...prevState,
//   //         value: prevState.value - 1,
//   //       };
//   //     case "showname":
//   //       return {
//   //         ...prevState,
//   //         showName: action.payload,
//   //       };
//   //     default:
//   //       return prevState;
//   //   }

//   return {
//     value: valueReducer(prevState.value, action),
//     showName: showNameReducer(prevState.showName, action),
//   };
// };

function value(prevState = 0, action) {
  switch (action.type) {
    case "incriment":
      return prevState + 1;

    case "decriment":
      return prevState - 1;

    default:
      return prevState;
  }
}

function showName(prevState = true, action) {
  switch (action.type) {
    case "showname":
      return action.payload;
    default:
      return prevState;
  }
}

function dataInfo(
  state = {
    data: [],
    error: "",
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "set-data":
      return {
        ...state,
        data: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

function setData(data) {
  return {
    type: "set-data",
    payload: data,
  };
}

function setLoading(isLoading) {
  return {
    type: "loading",
    payload: isLoading,
  };
}

function setError(err) {
  return {
    type: "error",
    payload: err,
  };
}

// ACTION CREATORS

function incriment() {
  return {
    type: "incriment",
  };
}
function decriment() {
  return {
    type: "decriment",
  };
}

function showname(payload) {
  return {
    type: "showname",
    payload,
  };
}

const store = createStore(appReducer, applyMiddleware(thunk));

export { incriment, decriment, showname, setLoading, setError, setData };
export default store;
