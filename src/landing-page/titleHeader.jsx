import { Box, IconButton, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
            <a
              href="http://geopick.netlify.app/welcome"
              target="blank"
              style={{ color: "#fafafa" }}
            >
              <ExitToAppIcon />
            </a>
          </IconButton>
          {/* <Button
            style={{
              marginRight: "5px",
              marginLeft: "auto",
              padding: "-10px 2px -10px 2px",
              borderRadius: "20px",
              color: "#fafafa",
              background: "#f56920",
            }}
          >
            Try the app now!
          </Button> */}
        </Toolbar>
      </Box>
    );
  }
}

export default TitleHeader;
