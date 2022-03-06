import { configureStore } from "@reduxjs/toolkit";
import FetchData from "./Slices/FetchData";
import Sign from "./Slices/Sign";

export default configureStore({
  reducer: { anketa: FetchData, sign: Sign },
});
