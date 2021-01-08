import React, { Component } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import "./bodyStyles.scss";

export class Body extends Component {
  render() {
    return (
      <div>
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
              <Typography variant="h5">
                GeoPicK is designed for every photographer. Using the app is
                very easy, just click pictures and share them across a global
                platform filled with your favourite designers andGeoPicK is
                designed for every photographer. Using the app is very easy,
                just click pictures and share them across a global platform
                filled with your favourite designers andGeoPicK is designed for
                every photographer. Using the app is very easy, just click
                pictures and share them across a global platform filled with
                your favourite designers andGeoPicK is designed for every
                photographer. Using the app is very easy, just click pictures
                and share them across a global platform filled with your
                favourite designers andGeoPicK is designed for every
                photographer. Using the app is very easy, just click pictures
                and share them across a global platform filled with your
                favourite designers and photographers...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
