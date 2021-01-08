import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import "./teamMembers.scss";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid } from "@material-ui/core";

export class TeamMembers extends Component {
  render() {
    return (
      <div>
        {/* <div align="center"> */}
        <Typography
          variant="h2"
          style={{ color: "#FAFAFA", padding: "3%", fontWeight: "600" }}
        >
          Team Members
        </Typography>
        {/* </div> */}

        <Grid
          container
          alignContent="center"
          direction="row"
          justify="space-evenly"
          spacing={1}
          wrap="wrap"
        >
          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar alt={"Megha"} src="../image/assets/megha.jpg" />
                </div>
                <Typography variant="h5" component="h2">
                  Megha
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Scrum Master
                </Typography>
                <Typography variant="body2" component="p">
                  A scrum master who likes to complete all the tasks given
                  effectively and efficiently.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar
                    alt={"Aditya Suresh"}
                    src="../image/assets/suresh.jpg"
                  />
                </div>
                <Typography variant="h5" component="h2">
                  Aditya Suresh
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Backend
                </Typography>
                <Typography variant="body2" component="p">
                  A scrum master who likes to complete all the tasks given
                  effectively and efficiently.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar
                    alt={"Aditya Thakur"}
                    src="../image/assets/thakur.jpg"
                  />
                </div>
                <Typography variant="h5" component="h2">
                  Aditya Thakur
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Backend
                </Typography>
                <Typography variant="body2" component="p">
                  A scrum master who likes to complete all the tasks given
                  effectively and efficiently.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar alt={"Mohit Katta"} src="../image/assets/mohit.jpg" />
                </div>
                <Typography variant="h5" component="h2">
                  Mohit Katta
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Design Manager
                </Typography>
                <Typography variant="body2" component="p">
                  A designer who likes to create a picture perfect design. Makes
                  his own illustarations rather than using premade components.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar alt={"Jesse"} src="../image/assets/jesse.jpg" />
                </div>
                <Typography variant="h5" component="h2">
                  Jesse Raju Thomas
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Development manager
                </Typography>
                <Typography variant="body2" component="p">
                  The go-to react developer.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar alt={"Jeet Solanki"} src="../image/assets/jeet.jpg" />
                </div>
                <Typography variant="h5" component="h2">
                  Jeet Solanki
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Technical Writer | developer
                </Typography>
                <Typography variant="body2" component="p">
                  Need a description
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar alt={"Rana"} src="../image/assets/rana.jpg" />
                </div>
                <Typography variant="h5" component="h2">
                  Rana
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Developer
                </Typography>
                <Typography variant="body2" component="p">
                  Need a description
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card className="main">
              <CardContent>
                <div align="center">
                  <Avatar alt={"Khaja"} src="../image/assets/khaja.jpg" />
                </div>
                <Typography variant="h5" component="h2">
                  Syed Khaja
                </Typography>
                <Typography className="subtitle" color="textSecondary">
                  Developer
                </Typography>
                <Typography variant="body2" component="p">
                  Need a description
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
