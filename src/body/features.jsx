import React, { Component } from "react";
import "./features.scss";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import Interface from "../image-assets/Group 14.png";
import { CustomCard } from "../image-assets/customCard";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

export class Features extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2} justify="Center" direction="column">
          <Typography variant="h2">
            <div className="titles">Features</div>
          </Typography>

          <Box m={-4} />
          <Grid item>
            <Typography variant="body2">
              <div>Tip: Hover on the photo below 👇</div>
              <br></br>
              <br></br>
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" spacing={5} justify="flex-start">
          <Grid item>
            <img
              src={Interface}
              alt="Main Interface"
              width="324px"
              height="700px"
              className="interface"
            ></img>
          </Grid>
        </Grid>
        <CustomCard
          title="Guess The Location"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
          icon={<LocationOnRoundedIcon />}
        />
        <br></br>
        <CustomCard
          title="Guess The Location"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
          icon={<LocationOnRoundedIcon />}
        />
      </div>
    );
  }
}
