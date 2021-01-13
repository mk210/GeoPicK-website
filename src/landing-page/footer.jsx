import React, { Component } from "react";
import {
  Container,
  Card,
  Typography,
  Grid,
  CardContent,
} from "@material-ui/core";
import Logo from "../image-assets/logo.svg";
// import BG from "../image-assets/background-geoPick.png";
export class Footer extends Component {
  render() {
    return (
      <div>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Typography
              variant="h5"
              style={{ textAlign: "left", padding: "10px", color: "#FAFAFA" }}
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
          </Grid>
          <Grid item>
            <Card>
              <CardContent style={{ height: "auto" }}>
                STILL IN PROGRESS
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
