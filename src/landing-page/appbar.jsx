import { Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
// import "./landingStyle.scss";
class AppBar extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <ThemeProvider theme={theme}> */}
          <Typography
            variant="body2"
            style={{ color: "#FAFAFA", fontWeight: 600 }}
          >
            <Grid container spacing={3} direction="row" justify="center">
              <Grid item>Home</Grid>
              <Grid item>Features</Grid>
              <Grid item>Team Members</Grid>
              <Grid item>Contact</Grid>
            </Grid>
          </Typography>
          {/* </ThemeProvider> */}
        </Container>
      </div>
    );
  }
}

export default AppBar;
