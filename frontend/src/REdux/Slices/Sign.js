import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  registracija: [],
  login: [],
  korisnici: [],
}
export const prijaviKorisnika = createAsyncThunk(
  'registracija korisnika',
  async ({ ime_korisnika, email, password, prezime }) => {
    try {
      console.log('fetc')
      const { data } = await axios.post('/api/korisnici', {
        ime_korisnika,
        email,
        password,
        prezime,
      })
      console.log(data)

      if (data) {
        localStorage.setItem('user', JSON.stringify(data)) // ubacili smo datu u localstorage
      }
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
export const loginKorisnika = createAsyncThunk(
  'ulogovanje korisnika',
  // async (formData) => {
  async ({ email, password }) => {
    try {
      console.log('fetc')
      const { data } = await axios.post('/api/korisnici/login', {
        email,
        password,
      })
      console.log(data)
      if (data) {
        localStorage.setItem('user', JSON.stringify(data)) // ubacili smo datu u localstorage
      }
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
export const uzmiKorisnike = createAsyncThunk(
  'uzmi korisnike sve ',
  async (id) => {
    try {
      const { data } = await axios.get('/api/korisnici/')
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

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
  name: 'prijavljivanje korisnika',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uzmiKorisnike.pending, (state) => {})
    builder.addCase(uzmiKorisnike.fulfilled, (state, { payload }) => {
      state.korisnici = payload
    })
    builder.addCase(prijaviKorisnika.pending, (state) => {})
    builder.addCase(prijaviKorisnika.fulfilled, (state, { payload }) => {
      state.registracija.push(payload)
    })
    builder.addCase(loginKorisnika.fulfilled, (state, { payload }) => {
      state.login.push(payload)
    })
  },
})

export default Sign.reducer
