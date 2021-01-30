import React, { Component } from "react";
import { Card, Typography, Grid, Link } from "@material-ui/core";
import Terms from "./terms";
import { Link as ScrollLink } from "react-scroll";

const marginValue = "10px";

function FooterLink(props) {
  return (
    <Grid item style={{ marginLeft: marginValue }}>
      <ScrollLink
        activeClass="active"
        to={props.id}
        spy={true}
        smooth={true}
        duration={1000}
        // className="secondary-button-text"
      >
        <Link>{props.name}</Link>
      </ScrollLink>
    </Grid>
  );
}
export class Footer extends Component {
  render() {
    return (
      <div>
        <Grid container direction="column" spacing={2}>
          <Grid item justify="center">
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                padding: "5px",
                color: "#FAFAFA",
                marginTop: "-1%",
              }}
            >
              The Geo
              <span
                style={{
                  color: "#F56920",
                  fontSize: "25px",
                  fontWeight: "inherit",
                }}
              >
                Pic
              </span>
              K Team
            </Typography>
            <Grid item justify="center">
              <Typography variant="body2">
                <Card
                  style={{
                    height: "auto",
                    width: "50%",
                    margin: "auto",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  <Grid container spacing={1} direction="row" justify="center">
                    <FooterLink id="featuresSection" name="Features" />
                    <Grid item style={{ marginLeft: marginValue }}>
                      <Terms />
                    </Grid>
                    <FooterLink id="featuresSection" name="Roadmap" />
                    <FooterLink id="featuresSection" name="Prototype Review" />
                  </Grid>
                </Card>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
