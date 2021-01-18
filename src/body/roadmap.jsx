import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";

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
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ background: "#F56920" }} />
              <TimelineConnector
                style={{ background: "#F56920", borderRadius: "50px" }}
              />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ background: "#F56920" }} />
              <TimelineConnector
                style={{ background: "#F56920", borderRadius: "50px" }}
              />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ background: "#F56920" }} />
              <TimelineConnector
                style={{ background: "#F56920", borderRadius: "50px" }}
              />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ background: "#F56920" }} />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default RoadMap;
