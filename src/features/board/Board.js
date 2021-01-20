import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AddTile from "../tiles/AddTile"
import FilteredTilesList from "../tiles/FilteredTilesList"
import Switcher from "../filters/Switcher"
import SelectFilter from "../filters/SelectFilter"
import ContinuousSlider from "../../components/ContinuousSlider"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#7a0025",
    color: "#ddd",
    padding: theme.spacing(1),
    height: "500px",
  },
}))

export const Board = ({ addTile }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <TilesList /> */}
      <FilteredTilesList />
      <AddTile />
      <Switcher />
      <SelectFilter />
      <ContinuousSlider />
    </div>
  )
}

export default Board
