import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

// import {
//   white,
//   grey,
//   lightGreen,
//   esteemGreen,
//   darkGreen,
//   darkGrey,
//   black,
// } from "../components/colors";
// import { primaryFont, secondaryFont } from "./fonts";
import "../index.css";
import TimelineItem from "@material-ui/lab/TimelineItem";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export function TimelineElement(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  if (props.tag === "alt") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={
          <Typography style={{ color: "#1b1b1b" }}>{props.time}</Typography>
        }
        contentArrowStyle={{ borderRight: "7px solid #f56920" }}
        iconStyle={{ background: "#fafafa", color: "#1b1b1b" }}
        iconOnClick={togglePopup}
        contentStyle={{
          background: "#fafafa",
          color: "#1b1b1b",
          paddingTop: 20,
        }}
        // icon={<WorkIcon />}
      >
        {isOpen && (
          <Popup
            content={
              <>
                <b>Design your Popup</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>Test button</button>
              </>
            }
            handleClose={togglePopup}
          />
        )}

        <ThemeProvider theme={theme}>
          <Typography variant="h3" className="vertical-timeline-element-title">
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            {props.subtitle}
          </Typography>
        </ThemeProvider>
        {/* <ThemeProvider theme={primaryFont}> */}
        <Typography variant="body1" style={{ fontWeight: "lighter" }}>
          {props.desc}
        </Typography>
        {/* </ThemeProvider> */}
      </VerticalTimelineElement>
    );
  } else {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#1b1b1b",
          color: "#fafafa",
          paddingTop: 20,
        }}
        contentArrowStyle={{ borderRight: "7px solid #FAFAFA" }}
        date={
          <Typography style={{ color: "#fafafa" }}>{props.time}</Typography>
        }
        iconStyle={{ background: "#1b1b1b", color: "#FAFAFA" }}
        iconOnClick={togglePopup}
      >
        {isOpen && (
          <Popup
            content={
              <>
                <b>Design your Popup</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button>Test button</button>
              </>
            }
            handleClose={togglePopup}
          />
        )}

        <ThemeProvider theme={theme}>
          <Typography variant="h3" className="vertical-timeline-element-title">
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            {props.subtitle}
          </Typography>
        </ThemeProvider>
        {/* <ThemeProvider theme={primaryFont}> */}
        <Typography variant="body1" style={{ fontWeight: "300" }}>
          {props.desc}
        </Typography>
        {/* </ThemeProvider> */}
      </VerticalTimelineElement>
    );
  }
}
