import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showname } from "../redux/store";

function CheckBox() {
  const dispatch = useDispatch();
  const handleOnChange = (evt) => {
    const checkbox = evt.target.checked;
    dispatch(showname(checkbox));
  };

  const value = useSelector((state) => state.showName);
  return (
    <div>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        
      </div>
      <input checked={value} onChange={handleOnChange} type="checkbox"></input> Check
      Name
    </div>
  );
}

export default CheckBox;
