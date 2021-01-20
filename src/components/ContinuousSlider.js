import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import { setRatio } from "../features/filters/filterSlice"
import { connect } from "react-redux"

const useStyles = makeStyles({
  root: {
    width: 200,
  },
})

export function ContinuousSlider({ setRatio }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(30)

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
    setRatio(newValue)
  }

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Ratio
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <RemoveIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            min={0}
            max={50}
            step={1}
          />
        </Grid>
        <Grid item>
          <AddIcon />
        </Grid>
      </Grid>
    </div>
  )
}

const mapDispatchToProps = { setRatio }

export default connect(null, mapDispatchToProps)(ContinuousSlider)
