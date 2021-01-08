import React, { Component } from "react";
import Logo from "../image-assets/logo.svg";
import {
  Grid,
  Typography,
  Button,
  createMuiTheme,
  ThemeProvider,
  Box,
} from "@material-ui/core";
import "./landingStyle.scss";
import AppBar from "./appbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      // this is orange
      main: "#F56920",
    },
    secondary: {
      // This is black
      main: "#1b1b1b",
    },
  },
});
export class Landing extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="flex-start"
          spacing={10}
          wrap="wrap"
        >
          <Grid item>
            <img
              classname="logo"
              src={Logo}
              alt="GeoPicK Logo"
              width="200px"
              height="90px"
              gutterBottom
            />
            <Grid item>
              <Typography variant="h1" className="title">
                Real Life.
              </Typography>
              <Box m={-2.5} />
              <Grid item>
                <Typography variant="h1" className="subtitle">
                  Captured
                </Typography>
                <Grid item>
                  <Typography variant="h6" gutterBottom>
                    <span className="subTagLine">
                      A photo sharing app like{" "}
                    </span>
                    never before
                  </Typography>

                  <Grid item justify="center">
                    <ThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        color="primary"
                        className="button-landing-contained"
                        style={{ borderRadius: "22.5px" }}
                      >
                        <div className="primary-button-text">
                          Try the app now!
                        </div>
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        className="button-landing-outlined"
                        style={{ borderRadius: "22.5px", margin: "20px" }}
                      >
                        <div className="secondary-button-text">Learn More!</div>
                      </Button>
                    </ThemeProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
