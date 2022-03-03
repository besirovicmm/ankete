import { configureStore } from "@reduxjs/toolkit";
import FetchData from "./Slices/FetchData";

export default configureStore({
  reducer: { anketa: FetchData },
});
