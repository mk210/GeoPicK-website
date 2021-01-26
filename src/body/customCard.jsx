import React, { Component } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});
export class CustomCard extends Component {
  render() {
    return (
      <Grid item>
        <Card
          style={{
            borderRadius: "20px",
            background: "#FAFAFA",
            minWidth: "20vw",
            maxWidth: "25vw",
            border: "3px solid #F56920",
          }}
        >
          <div
            style={{ textAlign: "center", padding: "10px", paddingTop: "20px" }}
          >
            <Typography variant="h5" style={{ color: "F56920" }}>
              {this.props.icon}
              {"   "}
              {this.props.title}
            </Typography>

            <CardContent>
              <ThemeProvider theme={theme}>
                <Typography variant="body1" style={{ fontWeight: "300" }}>
                  {this.props.content}
                </Typography>
              </ThemeProvider>
            </CardContent>
          </div>
        </Card>
      </Grid>
    );
  }
}
