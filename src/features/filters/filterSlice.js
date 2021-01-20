import { createSlice } from "@reduxjs/toolkit"

export const LayoutFilters = ["DARKEN", "LIGHTEN"]

const filterSlice = createSlice({
  name: "filter",
  initialState: { currentFilter: "LIGHTEN", active: true, ratio: 10 },
  reducers: {
    setCurrentFilter: (state, action) => ({
      ...state,
      currentFilter: action.payload,
    }),
    setRatio: (state, action) => ({ ...state, ratio: action.payload }),
    toggleFilter: (state, action) => ({ ...state, active: !state.active }),
  },
})

export const { setCurrentFilter, setRatio, toggleFilter } = filterSlice.actions

export default filterSlice.reducer
