import { Box, Card, Typography } from "@material-ui/core";
import React, { Component } from "react";

class AboutApp extends Component {
  render() {
    return (
      <Box>
        <Typography
          variant="h2"
          style={{ color: "#fafafa", fontWeight: "500" }}
        >
          About Us
        </Typography>
        <br></br>
        <Card
          style={{
            borderRadius: "20px",
            padding: "20px",
            textAlign: "center",
            justifyContent: "center",
            margin: "5px 20px 0px 20px",
            border: "2px solid #f56920",
          }}
        >
          <Typography
            variant="body1"
            style={{
              color: "#1b1b1b",
              fontWeight: "normal",
              margin: "0px 1em 0px 1em",
            }}
          >
            We are a group of year 3 Computer Science students studying at the
            Heriot Watt university. We have implemented a photo based social
            media application called GeoPicK. More about our team members are
            written below. This team of 8 members have worked constantly for 6
            months to achieve this feat. Since, we are working remotely, it was
            harder for us to work on this project. Luckily, remote tools such as
            MS teams, jira and confluence helped us complete this project.{" "}
            <br></br>
            <Typography variant="h6">
              Test out our app now, it's free and always will be!😊
            </Typography>
          </Typography>
        </Card>
      </Box>
    );
  }
}

export default AboutApp;
