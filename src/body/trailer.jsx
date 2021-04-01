import { Box, Card, Typography } from "@material-ui/core";
import React, { Component } from "react";
import TrailerVideo from "../image-assets/demo_video.mp4";
class Trailer extends Component {
  render() {
    return (
      <Box>
        <Card
          style={{
            padding: "10px",
            border: "2px solid #f56920",
            borderRadius: "20px",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Typography
            variant="h2"
            style={{ fontWeight: "600", textAlign: "center" }}
          >
            App Trailer
          </Typography>
          <Box m={-4} />
          <Typography
            variant="body"
            style={{
              fontWeight: "normal",
              fontSize: "18px",
              color: "#1b1b1b",
            }}
          >
            Watch it in Fullscreen📺{" "}
          </Typography>
          <Box m={1} />
          {/* <CardMedia src={TrailerVideo} /> */}
          <video
            // width="940"
            width="60%"
            // height="1080"
            src={TrailerVideo}
            type="video/mp4"
            controls
            autoPlay
          ></video>
          {/* <Divider
            style={{ background: "#1b1b1b", margin: "20px 100px 20px 100px" }}
          />
          <Typography variant="body2">
            This is our application's trailer!
          </Typography> */}
        </Card>
      </Box>
    );
  }
}

export default Trailer;
