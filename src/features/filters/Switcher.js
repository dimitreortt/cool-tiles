import React from "react"
import Switch from "@material-ui/core/Switch"
import { toggleFilter } from "./filterSlice"
import { connect } from "react-redux"

export function Switcher({ toggleFilter, isActive }) {
  const [state, setState] = React.useState(isActive)

  const handleChange = (event) => {
    setState(event.target.checked)

    if (event.target.name === "filterSwitcher") {
      toggleFilter()
    }
  }

  return (
    <div>
      Active:
      <Switch
        checked={state}
        onChange={handleChange}
        name="filterSwitcher"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  )
}

const selectCurrentFilter = (state) => {
  return state.filter.currentFilter
}

const selectIsActive = (state) => {
  return state.filter.active
}

const mapStateToProps = (state) => ({
  currentFilter: selectCurrentFilter(state),
  isActive: selectIsActive(state),
})
const mapDispatchToProps = { toggleFilter }

export default connect(mapStateToProps, mapDispatchToProps)(Switcher)
