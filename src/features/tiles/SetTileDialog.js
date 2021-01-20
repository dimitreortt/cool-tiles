import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import DialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import { blue } from "@material-ui/core/colors"
import { ColorPicker } from "material-ui-color"
import { nanoid } from "nanoid"
import { TextField } from "@material-ui/core"
import { StyledButton } from "../../components/StyledButton"

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogField: {
    margin: "10px",
  },
}))

export default function SetTileDialog(props) {
  const classes = useStyles()
  const { onClose, selectedValue, open } = props

  const [from, setFrom] = useState(
    selectedValue ? selectedValue.from : "purple"
  )
  const [to, setTo] = useState(selectedValue ? selectedValue.to : "orange")
  const [id, setId] = useState(selectedValue ? selectedValue.id : nanoid(8))

  const handleClose = () => {
    // console.log({ from, to, id })

    onClose({
      from: typeof from === "object" ? "#" + from.hex : from,
      to: typeof to === "object" ? "#" + to.hex : to,
      id,
    })
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.dialogField}
    >
      <DialogTitle id="simple-dialog-title">Setup Tile</DialogTitle>
      <ColorPicker value={from} onChange={(color) => setFrom(color)} />
      <ColorPicker value={to} onChange={(color) => setTo(color)} />
      <TextField
        label={"Tile Id"}
        value={id}
        onChange={(value) => setId(value)}
        className={classes.dialogField}
      />

      <StyledButton className={classes.dialogField} onClick={handleClose}>
        save
      </StyledButton>
    </Dialog>
  )
}

SetTileDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}
