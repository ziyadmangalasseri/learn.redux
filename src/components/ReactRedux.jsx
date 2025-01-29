import React, { useEffect } from "react";
// import "./index.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import CheckBox from "./CheckBox";
import { Link } from "react-router-dom";
// import { incriment, decriment, showname } from "../redux/store";
import { incriment, decriment } from "../redux-toolkit/valueReducer";
import getDataInfo from "../redux/api";
// import { setLoading } from "../redux/store";

function ReactRedux() {
  const dispatch = useDispatch();
  const {
    value,
    showName,
    //  dataInfo
  } = useSelector((state) => {
    return state;
  });
  // const data = dataInfo.data;
  // const error = dataInfo.error;
  // const loading = dataInfo.loading;
  // console.log("state: ",value,showname,dataInfo);

  useEffect(() => {
    dispatch(getDataInfo());
    // getDataInfo(dispatch);
  }, []);

  return (
    <div>
      {/* <div className="loading">{loading && <h1>Loading......</h1>}</div> */}
      {/* <div className="error">{error && <h1>Error...</h1>}</div> */}
      {showName && (
        <div>
          <h1>ziyad</h1>
        </div>
      )}
      <div>
        <Link to="/checkboxpage">
          <button>checkbox page</button>
        </Link>
      </div>
      <button
        onClick={() => {
          dispatch(incriment());
        }}
      >
        incriment
      </button>
      <h3>{value}</h3>
      <button
        onClick={() => {
          dispatch(decriment());
        }}
      >
        decriment
      </button>
      <button onClick={()=>{
        dispatch({
          type:"reset"
        })
      }}>
        Reset
      </button>
    </div>
  );
}

export default ReactRedux;
