import axios from "axios";
import { setError, setData, setLoading } from "./store";
const getDataInfo = () => {
  return (dispatch)=> {
    dispatch(setLoading(true));
    axios
      .get("http//localhost:5173/data")
      .then((response) => {
        dispatch(setData(response.data));
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setLoading(false));
        dispatch(setError("an Error occured"));
        console.log("an Error occured");
      });
  };
};

export default getDataInfo;
