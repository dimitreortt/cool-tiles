import { combineReducers } from "redux"
import tilesReducer from "../features/tiles/tilesSlice"
import filterReducer from "../features/filters/filterSlice"

// let defaultTilesState = []
// const tilesReducer = (state = defaultTilesState, action) => {
//   switch (action.type) {
//     case "SET_TILES":
//       return action.tiles
//     default:
//       return state
//   }
// }

export default combineReducers({
  tiles: tilesReducer,
  filter: filterReducer,
})
