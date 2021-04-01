import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  createMuiTheme,
  ThemeProvider,
  Divider,
  Grid,
} from "@material-ui/core";
import CountUp from "react-countup";
import { getPostCount, getUserCount, getLikeCount } from "../firebase";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const StatsCard = (props) => {
  return (
    <Grid item>
      <Card
        style={{
          borderRadius: "20px",
          background: "#FAFAFA",
          minWidth: "20vw",
          maxWidth: "25vw",
          wrap: "wrap",
          border: "3px solid #F56920",
          boxShadow: "0px 0px 250px rgba(0, 0, 0, 0.25)",
          marginRight: "50px",
          padding: "20px",
          textAlign: "center",
          // margin: "15px",
        }}
      >
        <ThemeProvider theme={theme}>
          <CardContent>
            <Typography
              style={{
                fontWeight: "lighter",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              {props.title}
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography
              style={
                {
                  //   color: "#1b1b1b",
                }
              }
            >
              <CountUp
                start={props.start}
                end={props.stats}
                delay={0}
                redraw={true}
                duration={4}
              >
                {({ countUpRef }) => (
                  <div>
                    <span
                      ref={countUpRef}
                      style={{
                        fontSize: "100px",
                        color: "#1b1b1b",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    />
                    {/* <button>Start</button> */}
                  </div>
                )}
              </CountUp>
            </Typography>
          </CardContent>
          <Box m={-2}></Box>
          <CardContent>
            <Typography
              style={{
                fontWeight: "lighter",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {props.subtitle}
            </Typography>
          </CardContent>
        </ThemeProvider>
      </Card>
    </Grid>
  );
};
class AppStats extends Component {
  state = {
    users: 0,
    posts: 0,
    likes: 0,
  };
  async componentDidMount() {
    const userCount = await getUserCount();
    const postCount = await getPostCount();
    const likeCount = await getLikeCount();
    this.setState({ users: userCount, posts: postCount, likes: likeCount });
  }
  render() {
    return (
      <Box style={{ padding: "20px" }}>
        <Typography variant="h2" style={{ fontWeight: "600" }}>
          About our App
        </Typography>
        <br></br>
        <Grid
          container
          direction="row"
          style={{ margin: "20px", justifyContent: "center" }}
        >
          <StatsCard
            title="Total number of posts"
            start="1"
            stats={this.state.posts}
            subtitle="and counting..."
          />
          <StatsCard
            title="Total number of users joined"
            start="1"
            stats={this.state.users}
            subtitle="and joining..."
          />
          <StatsCard
            title="Total number of likes"
            start="1"
            stats={this.state.likes}
            subtitle="and counting..."
          />
        </Grid>
      </Box>
    );
  }
}

export default AppStats;
