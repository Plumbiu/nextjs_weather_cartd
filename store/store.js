import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from './Slice/citySlice'
const store = configureStore({
  
  reducer: {
    city: cityReducer
  },
})

export default store
