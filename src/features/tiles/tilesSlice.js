import { createSlice } from "@reduxjs/toolkit"

const tilesSlice = createSlice({
  name: "tiles",
  initialState: [
    { id: "love", from: "#FE6B8B", to: "#FF8E53" },
    { id: "2x_QpzME", from: "#C650C6", to: "#141DC8" },
    { id: "2x_QpzMF", from: "#2FD334", to: "#EDE107" },
  ],
  reducers: {
    updateTile(state, action) {
      const { id, updates } = action.payload
      let tile = state.find((tile) => tile.id === id)

      let updatesEntries = Object.entries(updates)
      updatesEntries.forEach(([key, value]) => {
        tile[key] = value
      })
    },
    addTile(state, action) {
      console.log("qualquer coisa")
      console.log(action.payload)
      state.push(action.payload)
    },
  },
})

export const { updateTile, addTile } = tilesSlice.actions

export default tilesSlice.reducer
