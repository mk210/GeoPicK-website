import React, { Component } from "react";
import "./features.scss";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
// import Interface from "../image-assets/Group 14.png";
import { CustomCard } from "./customCard";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import UpdateRoundedIcon from "@material-ui/icons/UpdateRounded";
import DevicesRoundedIcon from "@material-ui/icons/DevicesRounded";

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

        <Grid
          container
          direction="row"
          spacing={1}
          justify="center"
          wrap="wrap"
        >
          <CustomCard
            title="Guess The Location"
            content="The main feature of the application is the game, Guess The Location. As the name suggests, it is one of the features that stands out from other social media applications. Fellow GeoPicK users will have an amazing time playing the game and finding the location of a post."
            icon={<LocationOnRoundedIcon />}
          />
          {/* <Grid item>
            <img
              src={Interface}
              alt="Main Interface"
              width="324px"
              height="700px"
              className="interface"
            ></img>
          </Grid> */}
          <CustomCard
            title="Integrated Google signup"
            content="Tired of registering for hundreds of social media apps? Well, don't worry anymore, Use you existing google account to log into GeoPicK and start your journey with us. No sign up hassle. Don't have a Google account, sign up for an account for free today! "
            icon={<AssignmentIndRoundedIcon />}
          />
          <CustomCard
            title="Universal News Feed"
            content="Want to see your favourite photographers alongside many others from all around the world, then GeoPicK is the perfect application for you! All the photos uploaded by anyone from around the world right into your app! See the world through our app at no cost!"
            icon={<AnnouncementIcon />}
          />
          <CustomCard
            title="Realtime Updates"
            content="Get real time updates every second, no need to manually refresh everytime you start the app, the database takes care of that for you!"
            icon={<UpdateRoundedIcon />}
          />
          <CustomCard
            title="No Download required"
            content="That's right, No need to download GeoPicK from any store, all you have to do is to type in <APP LINK> into your browser and click on 'Add to Home Screen'."
            icon={<SystemUpdateAltRoundedIcon />}
          />
          <CustomCard
            title="Works on a desktop as well"
            content="Using the power of PWAs, GeoPicK can be run on your laptop as well as your phone simultaneously. All you need is a browser to get started!"
            icon={<DevicesRoundedIcon />}
          />
        </Grid>
        <br></br>
      </div>
    );
  }
}
