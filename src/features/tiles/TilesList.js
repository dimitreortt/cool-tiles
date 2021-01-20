import React from "react"
import { Tile } from "./Tile"

export const TilesList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile) => (
        <Tile key={tile.id} tileInfo={tile} />
      ))}
    </div>
  )
}
