import React from "react"
import { TilesList } from "./TilesList"
import tinycolor from "tinycolor2"
import { connect } from "react-redux"

const selectTiles = (state) => state.tiles
const selectFilter = (state) => {
  return state.filter
}

const lightenTiles = (tiles, ratio) => {
  return tiles.map((tile) => {
    return {
      from: tinycolor(tile.from).lighten(ratio).toString(),
      to: tinycolor(tile.to).lighten(ratio).toString(),
      id: tile.id,
    }
  })
}

const darkenTiles = (tiles, ratio) => {
  return tiles.map((tile) => {
    return {
      from: tinycolor(tile.from).darken(ratio).toString(),
      to: tinycolor(tile.to).darken(ratio).toString(),
      id: tile.id,
    }
  })
}

const filterTiles = (tiles, filter) => {
  switch (filter.currentFilter) {
    case "LIGHTEN":
      return lightenTiles(tiles, filter.ratio)
    case "DARKEN":
      return darkenTiles(tiles, filter.ratio)
    default:
      return tiles
  }
}

const selectFilteredTiles = (state) => {
  const tiles = selectTiles(state)
  const filter = selectFilter(state)

  if (filter.active) {
    return filterTiles(tiles, filter)
  }
  return tiles
}

const mapStateToProps = (state) => {
  return {
    tiles: selectFilteredTiles(state),
  }
}

export default connect(mapStateToProps)(TilesList)
