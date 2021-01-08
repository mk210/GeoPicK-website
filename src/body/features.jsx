import React, { Component } from "react";
import "./features.scss";
import Typography from "@material-ui/core/Typography";
import { Grid, Card, Box, CardContent } from "@material-ui/core";
import Interface from "../image-assets/Group 14.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";

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

        <Grid container direction="row" spacing={5} justify="flex-start">
          <div>
            <Grid item>
              <Card className="leftFeatures">
                <CardContent>
                  <LocationOnIcon />
                  <Typography variant="h5">#Guess The Location</Typography>
                </CardContent>
              </Card>
            </Grid>
          </div>
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
      </div>
    );
  }
}

// {
//   /* <Grid container direction="column" spacing={0} justify="center">
// <Grid item>
//   <div className="interface">
//     <img
//       src={Interface}
//       alt="interface"
//       width="324.07px"
//       height="700px"
//       // 2.16
//     ></img>
//   </div>
// </Grid>
// </Grid> */
// }
