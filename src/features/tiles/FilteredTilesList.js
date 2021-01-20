import React from "react"
import { TilesList } from "./TilesList"
import tinycolor from "tinycolor2"
import { connect } from "react-redux"

export const FilteredTilesList = () => {
  return <div></div>
}

const selectTiles = (state) => state.tiles
const selectFilter = (state) => {
  console.log(state)
  return state.filter
}

const lightenTiles = (tiles, ratio) => {
  if (!ratio) {
    ratio = 10
  }
  console.log("greeting")
  return tiles.map((tile) => {
    return {
      from: tinycolor(tile.from).lighten(ratio).toString(),
      to: tinycolor(tile.to).lighten(ratio).toString(),
      id: tile.id,
    }
  })
}

const filterTiles = (tiles, filter) => {
  switch (filter.currentFilter) {
    case "LIGHTEN":
      return lightenTiles(tiles, filter.ratio)
    default:
      return tiles
  }
}

const selectFilteredTiles = (state) => {
  console.log("oi")
  const tiles = selectTiles(state)
  const filter = selectFilter(state)

  if (filter.active) {
    return filterTiles(tiles, filter)
  }
  return tiles
}

const mapStateToProps = (state) => {
  console.log("oioi")
  return {
    tiles: selectFilteredTiles(state),
  }
}

export default connect(mapStateToProps)(TilesList)
