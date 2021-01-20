import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { LayoutFilters } from "./filterSlice"
import { setCurrentFilter } from "./filterSlice"
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white",
    borderRadius: "15px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export const SelectFilter = ({ currentFilter, setCurrentFilter }) => {
  const classes = useStyles()
  const [filter, setFilter] = React.useState(currentFilter)
  console.log(filter)
  const handleChange = (event) => {
    setFilter(event.target.value)
    setCurrentFilter(event.target.value)
  }

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={filter}
          onChange={handleChange}
        >
          {LayoutFilters.map((filterName) => (
            <MenuItem value={filterName} key={filterName}>
              {filterName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

const selectCurrentFilter = (state) => state.filter.currentFilter

const mapStateToProps = (state) => ({
  currentFilter: selectCurrentFilter(state),
})

const mapDispatchToProps = {
  setCurrentFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)
