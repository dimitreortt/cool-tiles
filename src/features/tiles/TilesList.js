import React from "react"
import { Tile } from "./Tile"
import { connect } from "react-redux"

export const TilesList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile) => (
        <Tile key={tile.id} tileInfo={tile} />
      ))}
    </div>
  )
}

// const selectTiles = (state) => state.tiles

// const mapStateToProps = (state) => ({
//   tiles: selectTiles(state),
// })

// export default connect(mapStateToProps)(TilesList)
