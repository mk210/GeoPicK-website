import React, { Component } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";

const AppNewsCard = (props) => {
  return (
    <Grid item directtion="row">
      <Box style={{ padding: "20px" }}>
        <Card
          style={{
            borderRadius: "20px",
            background: "#1b1b1b",
            color: "#fafafa",
            minWidth: "20vw",
            maxWidth: "25vw",
            wrap: "wrap",
            border: "3px solid #F56920",
            boxShadow: "0px 0px 250px rgba(0, 0, 0, 0.25)",
            marginRight: "50px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Box
              style={{
                width: "fit-content",
                borderRadius: "50px",
                background: "#f56920",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textAlign: "left",
                  fontWeight: "lighter",
                  padding: "2px 5px 2px 5px",
                  marginBottom: "15px",
                }}
              >
                {props.date}
              </Typography>
            </Box>
            <Typography style={{ textAlign: "left" }} variant="h3">
              {props.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              variant="body1"
              style={{ fontWeight: "lighter", textAlign: "left" }}
            >
              {props.desc}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};
class AppNews extends Component {
  render() {
    return (
      <Box>
        {/* <Typography
          variant="h2"
          style={{ fontWeight: "600", padding: "0.8em" }}
        >
          About our application
        </Typography> */}
        <Grid container style={{ justifyContent: "center" }}>
          <AppNewsCard
            title="The Final App"
            date="March 2021"
            desc="The most awaited application is finally completed. Find the app's trailer on our official social media channels"
          />
          <AppNewsCard
            title="Cross-platform sharing"
            date="February 2021"
            desc="With the latest update of the app, users from all accross the world can share posts using the inbuilt share button."
          />
          <AppNewsCard
            title="Beta App release"
            date="February 2021"
            desc="The beta version of the app is now released. Share it with your friends and express your opinions on our official social media channels."
          />
          <AppNewsCard
            title="App interfaces designed"
            date="January 2021"
            desc="Thank you for the support everyone, we are almost done with the implementation of our beta release. All ready for the beta release of the app 😊"
          />
          <AppNewsCard
            title="App prototype"
            date="December 2020"
            desc="After consulting with the developers and designers, we are finally ready to share the prototype with the world. We have carefully designed the app for all ages and backgrounds."
          />

          <AppNewsCard
            title="Inititating Product vision"
            date="October 2020"
            desc="GeoPicK, the name of our wonderful application which is the solution to connect the world through the nature around them. We will be back with more news about the app and the release of the beta version of the application!🤞"
          />
        </Grid>
      </Box>
    );
  }
}

export default AppNews;
