import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function RoadMapItem(props) {
  if (props.tag === "last") {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ background: "#F56920" }} />
        </TimelineSeparator>
        <TimelineContent>
          <ThemeProvider theme={theme}>
            <Typography variant="body1">{props.title}</Typography>
          </ThemeProvider>
        </TimelineContent>
      </TimelineItem>
    );
  } else {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ background: "#F56920" }} />
          <TimelineConnector
            style={{ background: "#F56920", borderRadius: "50px" }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <ThemeProvider theme={theme}>
            <Typography variant="body1">{props.title}</Typography>
          </ThemeProvider>
        </TimelineContent>
      </TimelineItem>
    );
  }
}

class RoadMap extends React.Component {
  render() {
    return (
      <div
        style={{ textAlign: "center", justifyItems: "center", padding: "3%" }}
      >
        <Typography variant="h2" style={{ fontWeight: "600" }}>
          Our journey so far...
        </Typography>
        <Timeline align="right">
          <RoadMapItem title="eat" />
          <RoadMapItem title="code" />
          <RoadMapItem title="sleep" />
          <RoadMapItem title="repeat" tag="last" />
        </Timeline>
      </div>
    );
  }
}

export default RoadMap;
