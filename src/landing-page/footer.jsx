import React, { Component } from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import Terms from "./terms";
import { Link } from "react-scroll";
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
                  <Link>Home</Link>
                  <Link>Home</Link>
                  <Terms />
                </Card>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
