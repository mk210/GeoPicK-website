import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  createMuiTheme,
  ThemeProvider,
  Divider,
} from "@material-ui/core";
import CountUp from "react-countup";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const StatsCard = (props) => {
  return (
    <Card
      style={{
        borderRadius: "20px",
        background: "#FAFAFA",
        minWidth: "20vw",
        maxWidth: "25vw",
        wrap: "wrap",
        border: "3px solid #F56920",
        boxShadow: "0px 100px 250px rgba(0, 0, 0, 0.25)",
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
  );
};
class AppStats extends Component {
  render() {
    return (
      <Box style={{ padding: "20px" }}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Application statistics
        </Typography>
        <br></br>
        <StatsCard
          title="The total number of posts"
          start="1"
          stats="60"
          subtitle="and counting..."
        />
      </Box>
    );
  }
}

export default AppStats;
