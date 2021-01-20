import Board from "../features/board/Board"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import React from "react"
import { theme } from "../materialUI/theme"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Board />
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
