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
      <Grid container style={{ justifyContent: "center" }}>
        <AppNewsCard
          title="Check out the All-New Explore page"
          date="19/06/2021"
          desc="I need some contect for this and all that!"
        />
        <AppNewsCard
          title="Check out the All-New Explore page"
          date="19/06/2021"
          desc="I need some contect for this and all that!"
        />
        <AppNewsCard
          title="Check out the All-New Explore page"
          date="19/06/2021"
          desc="I need some contect for this and all that!"
        />
        <AppNewsCard
          title="Check out the All-New Explore page"
          date="19/06/2021"
          desc="I need some contect for this and all that!"
        />
        <AppNewsCard
          title="Check out the All-New Explore page"
          date="19/06/2021"
          desc="I need some contect for this and all that!"
        />
      </Grid>
    );
  }
}

export default AppNews;
