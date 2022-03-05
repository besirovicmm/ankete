import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ankete: [],
  anketeZasebno: [],
};
export const getAnkete = createAsyncThunk("Neki String", async () => {
  try {
    console.log("fetc");
    const { data } = await axios.get("/api/ankete");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const uzmiPitanja = createAsyncThunk(
  "uzmi pitanja preko ID",
  async (id) => {
    try {
      console.log("fetc");
      const { data } = await axios.post("/api/ankete/id", { id });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchData = createSlice({
  name: "fecuj ankete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnkete.pending, (state) => {});
    builder.addCase(getAnkete.fulfilled, (state, { payload }) => {
      state.ankete = payload;
      console.log(state.ankete);
    });
    builder.addCase(uzmiPitanja.fulfilled, (state, { payload }) => {
      state.anketeZasebno = payload;
      console.log(state.anketeZasebno);
    });
  },
});

export default fetchData.reducer;
