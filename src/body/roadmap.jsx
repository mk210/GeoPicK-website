import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import SettingsApplicationsRoundedIcon from "@material-ui/icons/SettingsApplicationsRounded";
import CameraEnhanceRoundedIcon from "@material-ui/icons/CameraEnhanceRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColor";
import StorageRoundedIcon from "@material-ui/icons/Storage";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import MobileScreenShareRoundedIcon from "@material-ui/icons/MobileScreenShareRounded";
import NewReleasesRoundedIcon from "@material-ui/icons/NewReleasesRounded";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function RoadMapItem(props) {
  if (props.tag === "alt") {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ background: "#1b1b1b" }}>
            {props.icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} style={{ margin: "auto", padding: "10px" }}>
            <Typography variant="h6" component="h1" align="right">
              {props.title}{" "}
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {props.time}
              </Typography>
            </Typography>
            <ThemeProvider theme={theme}>
              <Typography variant="body2" align="right">
                {props.desc}
              </Typography>
            </ThemeProvider>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  } else {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ background: "#f56920" }}>
            {props.icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} style={{ margin: "auto", padding: "10px" }}>
            <Typography variant="h6" component="h1" align="left">
              {props.title}{" "}
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {props.time}
              </Typography>
            </Typography>
            <ThemeProvider theme={theme}>
              <Typography variant="body2" align="left">
                {props.desc}
              </Typography>
            </ThemeProvider>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  }
}

class RoadMap extends React.Component {
  render() {
    return (
      <div
        style={{ textAlign: "center", justifyItems: "center", padding: "3%" }}
      >
        <Typography variant="h2" style={{ fontWeight: "600" }}>
          Product Roadmap
        </Typography>
        <Timeline align="alternate">
          <RoadMapItem
            title="Initiating Product Vision"
            desc=" A solution to connect the world through the nature around them."
            time="October 2020"
            icon={<PublicRoundedIcon />}
          />
          <RoadMapItem
            title="Initiating Product Strategy"
            desc="Key points and features discussed before developing the application."
            time="November 2020"
            tag="alt"
            icon={<SettingsApplicationsRoundedIcon />}
          />
          <RoadMapItem
            title="Proposing GeoPicK"
            desc="Our image-sharing application as a uniform ground for hobbyists, academicians and gamers alike."
            time="December 2020"
            icon={<CameraEnhanceRoundedIcon />}
          />
          <RoadMapItem
            title="The App Design and market research"
            desc="Creating the Design consumers want and discussion on collecting user data as per GDPR"
            time="January 2021"
            tag="alt"
            icon={<BorderColorRoundedIcon />}
          />
          <RoadMapItem
            title="The App backend"
            desc="Creating Database architecture based on user data"
            time="January 2021"
            icon={<StorageRoundedIcon />}
          />

          <RoadMapItem
            title="The App"
            desc="Creating the user registration interfaces and the user home screen interface with Guess The Location button"
            time="Rolling Out - February 2021"
            icon={<HomeRoundedIcon />}
            tag="alt"
          />
          <RoadMapItem
            title="Product Demo"
            desc="First round of product demo "
            time="Rolling Out - February 2021"
            icon={<VisibilityRoundedIcon />}
          />
          <RoadMapItem
            title="Cross-Platform sharing"
            desc="Enabling the users for cross-platform sharing on our Progressive-web application."
            time="Rolling Out - February 2021"
            icon={<MobileScreenShareRoundedIcon />}
            tag="alt"
          />
          <RoadMapItem
            title="The Final Application"
            desc="Game development for 'Guess the Location'."
            time="Rolling Out - February 2021"
            icon={<NewReleasesRoundedIcon />}
          />
          {/* <RoadMapItem title="Initiating Product Strategy" /> */}
        </Timeline>
      </div>
    );
  }
}

export default RoadMap;
