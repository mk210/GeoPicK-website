import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import "./teamMembers.scss";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
            <Avatar alt={props.name} src={props.dp} />
          </div>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className="subtitle" color="textSecondary">
            {props.position}
          </Typography>
          <ThemeProvider theme={theme}>
            <Typography variant="body2" component="p">
              {props.desc}
            </Typography>
          </ThemeProvider>
        </CardContent>
      </Card>
    </Grid>
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
          justify="space-around"
          spacing={1}
          wrap="wrap"
        >
          <MemberCard
            name="Megha"
            position="Scrum Master"
            desc="A scrum master who likes to complete all the tasks given
                  effectively and efficiently."
          />

          <MemberCard
            name="Aditya Suresh"
            position="Backend"
            desc="Need a description"
          />

          <MemberCard
            name="Aditya Thakur"
            position="Backend"
            desc="Need a description"
          />

          <MemberCard
            name="Mohit Katta"
            position="Design Manager"
            desc="A designer who likes to create a picture perfect design. Makes his own illustarations rather than using premade components."
          />

          <MemberCard
            name="Jesse Raju Thomas"
            position="Development Manager"
            desc="The go-to react developer."
          />

          <MemberCard
            name="Jeet Kailash Solanki"
            position="Technical Writer | developer"
            desc="Need a description"
          />

          <MemberCard
            name="Syed Khaja"
            position="Fontend | Backend developer"
            desc="Need a description"
          />

          <MemberCard
            name="Rana"
            position="Backend"
            desc="Need a description"
          />
        </Grid>
      </div>
    );
  }
}
