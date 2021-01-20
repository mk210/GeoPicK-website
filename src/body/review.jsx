import {
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Box,
} from "@material-ui/core";
import React, { Component } from "react";

function ReviewCard(props) {
  return (
    <Grid item direction="row">
      <Card
        style={{
          background: "#1b1b1b",
          color: "#fafafa",
          borderRadius: "20px",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px",
          margin: "15px",
          // width: "25%",
          minWidth: "300px",
          maxWidth: "300px",
          height: "250px",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: 300 }}>
          <CardContent>{props.desc}</CardContent>
        </Typography>

        <Box m={1}></Box>
        <div align="center">
          <Avatar
            alt={props.name}
            src={props.dp}
            style={{ justifyContent: "center", textJustify: "center" }}
          />
          <Box m={0.5}></Box>
        </div>

        <Typography variant="h5" style={{ fontWeight: 500 }}>
          {props.name}
        </Typography>
      </Card>
    </Grid>
  );
}

class PrototypeReview extends Component {
  render() {
    return (
      <div
        style={{
          padding: "3%",
          justifyContent: "center",
          background: "#F56920",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: "600", marginBottom: "20px", color: "#fafafa" }}
        >
          Prototype review
        </Typography>
        <Grid
          container
          alignContent="center"
          direction="row"
          justify="space-evenly"
          spacing={1}
          wrap="wrap"
        >
          <ReviewCard
            name="Subject #1"
            desc='"Overall the app looks amazing. I love the UI and color scheme. Good job."'
            dp="https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
          <ReviewCard
            name="Subject #2"
            desc='"The app was pretty intuitive and easy to figure out."'
            dp="https://images.unsplash.com/photo-1610554103915-c05cfbd55068?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
          />
          <ReviewCard
            name="Subject #3"
            desc='"The whole app looks excellent for a prototype, Few tweaks and its a dub."'
            dp="https://images.unsplash.com/photo-1588143140627-b6ea0f65448b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
        </Grid>
      </div>
    );
  }
}

export default PrototypeReview;
