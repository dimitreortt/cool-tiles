import React from "react"
import TilesList from "../tiles/TilesList"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { StyledButton } from "../../components/StyledButton"
import { addTile } from "../tiles/tilesSlice"
import { connect } from "react-redux"
import AddTile from "../tiles/AddTile"
import { FilteredTilesList } from "../tiles/FilteredTilesList"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#333",
    color: "#ddd",
    padding: theme.spacing(1),
    height: "500px",
  },
}))

export const Board = ({ addTile }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      ola
      {/* <TilesList /> */}
      <FilteredTilesList />
      <AddTile />
    </div>
  )
}

export default Board
