import React from "react"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import SetTileDialog from "./SetTileDialog"
import { StyledButton } from "../../components/StyledButton"
import { addTile } from "../tiles/tilesSlice"
import { connect } from "react-redux"

export function AddTile({ addTile }) {
  const [open, setOpen] = React.useState(false)
  // const [selectedValue, setSelectedValue] = React.useState()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = ({ id, from, to }) => {
    setOpen(false)
    // setSelectedValue(value)
    console.log({ id, from, to }, "aoshd")
    addTile({ id, from, to })
  }

  const handleAddTile = () => {
    console.log("button clicked")
    addTile({ id: "newId", from: "a", to: "b" })
  }

  return (
    <div>
      <br />
      {/* <StyledButton onClick={handleAddTile}>add tile</StyledButton> */}
      <StyledButton onClick={handleClickOpen}>add tile</StyledButton>
      <SetTileDialog
        // selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

const mapDispatchToProps = { addTile }

export default connect(undefined, mapDispatchToProps)(AddTile)
