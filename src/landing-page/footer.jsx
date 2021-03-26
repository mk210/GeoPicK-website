import React, { Component } from "react";
import { Card, Typography, Grid, Link } from "@material-ui/core";
import Terms from "./terms";
import { Link as ScrollLink } from "react-scroll";

const marginValue = "10px";

function FooterLink(props) {
  return (
    <Grid item style={{ paddingLeft: marginValue, paddingTop: marginValue }}>
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
                    <FooterLink id="landing" name="Back to top" />
                    <FooterLink id="features" name="Features" />

                    <FooterLink id="roadmap" name="Roadmap" />
                    {/* <FooterLink id="review" name="Prototype Review" /> */}
                    <Grid
                      item
                      style={{
                        paddingLeft: marginValue,
                        paddingTop: marginValue,
                      }}
                    >
                      <Terms />
                    </Grid>
                  </Grid>
                  <br></br>
                  <Typography variant="body2" style={{ color: "#1b1b1b" }}>
                    This website is licensed under{" "}
                    <a
                      href="https://creativecommons.org/licenses/by/4.0/"
                      target="blank"
                      color="#f56920"
                    >
                      Creative Commons Attribution 4.0 International
                    </a>
                  </Typography>
                </Card>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
