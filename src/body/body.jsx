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
      <div id="body">
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
            <Paper
              className="body-card"
              elevation={24}
              style={{ borderRadius: "50px" }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "300", textAlign: "left" }}
                >
                  GeoPick symbolizes a contemporary social media platform. With
                  ‘Photo sharing’ being its forte, this app is devised to lure
                  the photography enthusiasts to share their snapshots embracing
                  nature, animals, landmarks, tourist attractions, etc. What
                  makes GeoPick unique is that users can share photos of
                  anything and everything except Humans. It connects people
                  through means of photography, it allows people to share
                  different moments captured by them with the world. GeoPick has
                  been equipped with an array of features that any leading
                  social media platform would possess. GeoPick further enthralls
                  its users through its distinctive gaming feature which
                  requires the GeoPick family to correctly identify the location
                  of the snapshot posted by their fellows, whereby, users with
                  correct guesses would earn points. Thus, stimulating an aura
                  of engagement and connectivity amongst the GeoPick family.
                </Typography>
              </ThemeProvider>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
