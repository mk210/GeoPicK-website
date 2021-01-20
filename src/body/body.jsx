import React, { Component } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import "./bodyStyles.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
export class Body extends Component {
  render() {
    return (
      <div id="featuresSection">
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
          spacing={5}
        >
          <Grid
            container
            alignContent="center"
            direction="column"
            justify="center"
            spacing={5}
          >
            <Typography variant="h3">
              <div className="title">What is GeoPicK ?</div>
            </Typography>
          </Grid>
          <Grid item>
            <Paper className="body-card" elevation={24} color="primary">
              <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{ fontWeight: "300" }}>
                  GeoPicK is designed for every photographer. Using the app is
                  very easy, just click pictures and share them across a global
                  platform filled with your favourite designers andGeoPicK is
                  designed for every photographer. Using the app is very easy,
                  just click pictures and share them across a global platform
                  filled with your favourite designers andGeoPicK is designed
                  for every photographer. Using the app is very easy, just click
                  pictures and share them across a global platform filled with
                  your favourite designers andGeoPicK is designed for every
                  photographer. Using the app is very easy, just click pictures
                  and share them across a global platform filled with your
                  favourite designers andGeoPicK is designed for every
                  photographer. Using the app is very easy, just click pictures
                  and share them across a global platform filled with your
                  favourite designers and photographers.
                </Typography>
              </ThemeProvider>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
