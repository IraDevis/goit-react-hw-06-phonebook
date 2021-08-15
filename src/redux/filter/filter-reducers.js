import { createReducer } from "@reduxjs/toolkit";
import { getFilter } from "./filter-actions";

const filterReducer = createReducer("", {
  [getFilter]: (_, action) => action.payload,
});

export default filterReducer;
