import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    incriment: (state, action) => {
      return state + 1;
    },
    decriment: (state, action) => {
      return state - 1;
    },
  },
  extraReducers:(builder)=> {
    builder.addCase("reset",(state)=>{
        return 0;
    })
  }
});
// console.log(valueSlice.actions);

export const { incriment, decriment} = valueSlice.actions;
export default valueSlice.reducer;
