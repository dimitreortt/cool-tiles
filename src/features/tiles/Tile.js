import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Paper, makeStyles } from "@material-ui/core"
import SimpleDialogDemo from "./SetTileDialog"

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledPaper = withStyles((theme) => ({
  root: {
    background: (props) => {
      return `linear-gradient(45deg, ${props.tileInfo.from} 30%, ${props.tileInfo.to} 90%)`
    },
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: `0 3px 5px 2px rgba(255, 105, 135, .3)`,
  },
}))(Paper)

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}))

export const Tile = ({ tileInfo }) => {
  const classes = useStyles({ tileInfo })
  console.log(tileInfo)

  return (
    <div className={classes.root}>
      <StyledPaper tileInfo={tileInfo}>This is a Tile =)</StyledPaper>
    </div>
  )
}
