import { createSlice } from "@reduxjs/toolkit"
const citySlice = createSlice({
  name: 'city',
  initialState: {
    city: '杭州'
  },
  reducers: {
    setCity(state, action) {
      state.city = action.payload
    }
  }
})
export const { setCity } = citySlice.actions
export const { reducer: cityReducer } = citySlice