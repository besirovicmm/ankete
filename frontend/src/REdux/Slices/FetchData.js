import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  ankete: [],
}
export const getAnkete = createAsyncThunk('Neki String', async () => {
  try {
    console.log('fetc')
    const { data } = await axios.get('/api/ankete')
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const fetchData = createSlice({
  name: 'fecuj ankete',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnkete.pending, (state) => {})
    builder.addCase(getAnkete.fulfilled, (state, { payload }) => {
      state.ankete.push(payload)
    })
  },
})

export default fetchData.reducer
