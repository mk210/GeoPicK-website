import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import One from "../image-assets/Group-1.png";
import Two from "../image-assets/Group-2.png";
import Three from "../image-assets/Group-3.png";
import Four from "../image-assets/Group-4.png";
import Five from "../image-assets/Group-5.png";
import Six from "../image-assets/Group-6.png";
import { Box } from "@material-ui/core";
// import AwsSliderStyles from "react-awesome-slider/src/components/react-awesome-frame/styles.scss";
import AwsSliderStyles from "react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss";

class Features extends Component {
  render() {
    return (
      <Box style={{ width: 1000 }} id="features">
        <AwesomeSlider cssModule={AwsSliderStyles}>
          <div data-src={One} width="auto" />
          <div data-src={Two} />
          <div data-src={Three} />
          <div data-src={Four} />
          <div data-src={Five} />
          <div data-src={Six} />
        </AwesomeSlider>
        <div style={{ padding: "10px" }} />
      </Box>
    );
  }
}

export default Features;
