import React, { Component } from "react";
import "./features.scss";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import Interface from "../image-assets/Group 14.png";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

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
          {/* <div>
            <Grid item>
              <Card className="grow">
                <CardContent>
                  <Typography color="textPrimary" gutterBottom>
                    <LocationOnIcon /> Guess The Location
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </div> */}
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
