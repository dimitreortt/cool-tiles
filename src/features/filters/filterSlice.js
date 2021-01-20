import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filter",
  initialState: { currentFilter: "LIGHTEN", active: true },
  reducers: {
    setCurrentFilter: (state, action) => (state.currentFilter = action.payload),
    toggleFilter: (state, action) => (state.active = !state.active),
  },
})

export const { setCurrentFilter, toggleFilter } = filterSlice.actions

export default filterSlice.reducer
