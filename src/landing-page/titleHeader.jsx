import { Box, IconButton, Toolbar, Typography, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { useHistory, Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import Logo from "../image-assets/logo.svg";

class TitleHeader extends Component {
  render() {
    return (
      <Box style={{ padding: "10px", background: "#1b1b1b" }}>
        {/* <Typography></Typography> */}
        <Toolbar>
          <Link to="/">
            <IconButton edge="start">
              <ArrowBackRoundedIcon />
            </IconButton>
          </Link>
          <Link
            to="/"
            style={{
              marginLeft: "auto",
              marginRight: "-25px",
              position: "relative",
            }}
          >
            <img
              classname="logo"
              src={Logo}
              alt="GeoPicK Logo"
              width="200px"
              height="90px"
              gutterBottom
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
              }}
            />
          </Link>
          <IconButton style={{ marginRight: "10px", marginLeft: "auto" }}>
            <HelpRoundedIcon />
          </IconButton>
        </Toolbar>
      </Box>
    );
  }
}

export default TitleHeader;
