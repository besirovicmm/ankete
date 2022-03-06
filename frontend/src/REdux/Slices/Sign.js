import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  registracija: [],
  login: [],
};
export const prijaviKorisnika = createAsyncThunk(
  "registracija korisnika",
  async (input) => {
    try {
      console.log("fetc");
      const { data } = await axios.post("/api/korisnici", { input });
      console.log(data);

      if (data) {
        JSON.stringify(localStorage.setItem("user", data)); // ubacili smo datu u localstorage
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const loginKorisnika = createAsyncThunk(
  "ulogovanje korisnika",
  async (input) => {
    try {
      console.log("fetc");
      const { data } = await axios.post("/api/korisnici/login", { input });
      console.log(data);
      if (data) {
        JSON.stringify(localStorage.setItem("user", data)); // ubacili smo datu u localstorage
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const authorization = createAsyncThunk("proveri token", async () => {
//   try {
//     console.log("fetc");
//     const token = {
//       headers: {
//         Authorization: "",
//       },
//     };
//     const { data } = await axios.get("/api/korisnici", token);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const Sign = createSlice({
  name: "prijavljivanje korisnika",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(prijaviKorisnika.pending, (state) => {});
    builder.addCase(prijaviKorisnika.fulfilled, (state, { payload }) => {
      state.registracija.push(payload);
    });
    builder.addCase(loginKorisnika.fulfilled, (state, { payload }) => {
      state.login.push(payload);
    });
  },
});

export default Sign.reducer;
