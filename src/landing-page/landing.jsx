import React, { Component } from "react";
import Logo from "../image-assets/logo.svg";
import {
  Grid,
  Typography,
  Button,
  createMuiTheme,
  ThemeProvider,
  Box,
  Badge,
} from "@material-ui/core";
import "./landingStyle.scss";
// import styled from "styled-components";
import { Link } from "react-scroll";
const fontTheme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

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
            <Box m={-10} />
            <Grid item>
              <Typography variant="h1" className="title">
                Real Life.
              </Typography>
              <Box m={-2.5} />
              <Grid item>
                <Typography
                  variant="h1"
                  style={{ fontWeight: "600" }}
                  className="typewriter"
                >
                  Captured.
                </Typography>
                <Grid item>
                  <ThemeProvider theme={fontTheme}>
                    <Typography variant="h6" gutterBottom>
                      <span className="subTagLine">
                        A photo sharing app like{" "}
                      </span>
                      never before
                    </Typography>
                  </ThemeProvider>

                  <Grid item justify="center">
                    <ThemeProvider theme={theme}>
                      <Badge color="secondary" badgeContent="BETA">
                        <Button
                          variant="contained"
                          color="primary"
                          className="button-landing-contained"
                          style={{ borderRadius: "22.5px" }}
                        >
                          <a
                            href="http://geopick.netlify.app/welcome"
                            target="blank"
                            className="primary-button-text"
                          >
                            Try the app now!
                          </a>
                        </Button>
                      </Badge>
                      <Box width="10px" />
                      <Link
                        activeClass="active"
                        to="body"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className="secondary-button-text"
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          className="button-landing-outlined"
                          style={{ borderRadius: "22.5px", margin: "20px" }}
                        >
                          Learn More!
                        </Button>
                      </Link>
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
