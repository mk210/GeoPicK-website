import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import "./teamMembers.scss";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Grid,
  Box,
  ThemeProvider,
  createMuiTheme,
  IconButton,
  CardHeader,
  CardMedia,
  CardActions,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import teamLeader from "../image-assets/team-leader.png";
import backendAdmin from "../image-assets/admin.png";
import designer from "../image-assets/pen-tool.png";
import developer from "../image-assets/web-development.png";
import writer from "../image-assets/copywriter.png";
import dbConectivity from "../image-assets/database-connectivity.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import backend from "../image-assets/server.png";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function MemberCard(props) {
  return (
    <Grid item>
      <Card className="main" style={{ borderRadius: "20px" }}>
        <CardContent>
          <div align="center">
            <Avatar alt={props.name} src={props.icon} variant="rounded" />
            <Box height="4px" />
          </div>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className="subtitle">{props.position}</Typography>
          <ThemeProvider theme={theme}>
            <Typography variant="body2" component="p" color="textSecondary">
              {props.desc}
            </Typography>
          </ThemeProvider>
        </CardContent>
      </Card>
    </Grid>
  );
}

function MemberCardV2(props) {
  return (
    <Card
      style={{
        maxHeight: 800,
        maxWidth: 600,
        width: "320px",
        height: "auto",
        margin: "auto",
        marginBlock: "20px",
        background: "#1b1b1b",
        borderRadius: "20px",
        border: "2px solid #f56920",
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={props.icon} style={{ backgroundColor: "#fafafa" }} />
          //     {this.state.post_user.User_name}
          // </AvatarSmall>
        }
        // action={
        //   // <>
        //   <ReportButton />
        //   //</>
        // }
        title={<Typography variant="h6">{props.name}</Typography>}
        subheader={
          <Typography style={{ color: "#fafafa", fontSize: "10px" }}>
            {props.position}
          </Typography>
        }
        style={{ textAlign: "left", color: "#fafafa" }}
      />
      <CardMedia
        image={props.postPic}
        title={`Hey, this is ${props.name}`}
        style={{
          borderRadius: "20px 20px 20px 20px",
          height: 0,
          paddingTop: "56.25%",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ color: "#fafafa", textAlign: "center" }}
        >
          {props.desc}
        </Typography>
      </CardContent>
      <Box m={-2} />
      <CardActions disableSpacing>
        {/* <Link to={{ pathname: `/post/${this.props.id}`, state: this.props.uid }}> */}
        <IconButton href={props.github} target="blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href={props.linkedin} target="blank">
          <LinkedInIcon />
        </IconButton>
        {/* </Link> */}
        <Box m={1} />
        {/* <IconButton aria-label="share"> */}
        {/* <SharePost sharedURL={`${root}${this.state.path_name}`} /> */}
        {/* </IconButton> */}
        {/* <div
          style={{ float: "right", marginRight: "10px", marginLeft: "auto" }}
          onClick={this.handleClickRandomizer}
        > */}
        {/* <GTLmenu
                            location2={this.state.loc1}
                            correctLocation={this.props.location}
                            location3={this.state.loc2}
                            order={this.state.random}
                            uid={this.props.uid}
                        /> */}
        {/* </div> */}
      </CardActions>
    </Card>
  );
}

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
          <MemberCardV2
            name="Megha Sharma"
            icon={teamLeader}
            position="Scrum master"
            desc="A scrum master who likes to complete all the tasks given
            effectively and efficiently"
            postPic="https://i.pinimg.com/564x/3b/da/8a/3bda8adf2ed4433862eb132519931886.jpg"
          />
          {/* <MemberCard
            name="Megha Sharma"
            position="Scrum Master | Frontend"
            desc="A scrum master who likes to complete all the tasks given
                  effectively and efficiently."
            icon={teamLeader}
          /> */}

          <MemberCardV2
            name="Aditya Suresh"
            position="Database Admin | Backend"
            desc="A Database handler who can structure data with ease."
            icon={backendAdmin}
            postPic="https://i.pinimg.com/564x/0e/12/40/0e124001d765882a507f185a640f0d57.jpg"
          />

          <MemberCardV2
            name="Aditya Thakur"
            position="Database Admin | Backend"
            desc="Database administrator that can structure out data at it's best efficiency."
            icon={backendAdmin}
            postPic="https://i.pinimg.com/564x/af/04/fd/af04fddb905b5447dfa27165ec089c25.jpg"
          />

          <MemberCardV2
            name="Mohit Katta"
            position="Design Manager | Frontend"
            desc="The guy who creates a picture perfect design and a smooth UI."
            icon={designer}
            // postPic="https://image.shutterstock.com/shutterstock/photos/1687680496/display_1500/stock-photo-painting-girl-guy-rides-on-swing-in-sky-against-background-of-beautiful-purple-pink-sunset-and-1687680496.jpg"
            postPic="https://i.pinimg.com/564x/fe/a9/0e/fea90e005c9f8f9e87af02b2f8a422c3.jpg"
            github="https://github.com/mk210"
            linkedin="https://www.linkedin.com/in/mohit-katta"
          />

          <MemberCardV2
            name="Jesse Raju Thomas"
            position="Dev Manager | Frontend "
            desc="The go-to react developer specializing in Typescript."
            icon={developer}
            postPic="https://i.pinimg.com/564x/7c/87/d0/7c87d00d7942c296f005d5e601827257.jpg"
          />

          <MemberCardV2
            name="Jeet Kailash Solanki"
            position="Technical Writer | Frontend"
            desc="A skilled wordsmith and a creative minded dev."
            icon={writer}
            postPic="https://i.pinimg.com/564x/c9/2c/89/c92c89c8783336bc0ab59e5141774384.jpg"
          />

          <MemberCardV2
            name="Syed Khaja"
            position="Frontend"
            desc="An agile dev who manages backend + frontend connectivity easily."
            icon={dbConectivity}
            postPic="https://i.pinimg.com/564x/a4/44/83/a444831f3ef2b2f81e16a189a26c92b9.jpg"
          />

          <MemberCardV2
            name="Rana Talha"
            position="Backend"
            desc="A database user who aims for ease of use for everyone."
            icon={backend}
            postPic="https://i.pinimg.com/564x/14/61/f8/1461f84963533f04637e35a57c669386.jpg"
          />
        </Grid>
      </div>
    );
  }
}
