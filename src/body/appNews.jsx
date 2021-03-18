import React, { Component } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

class AppNews extends Component {
  render() {
    return (
      <Box>
        <Card
          style={{
            borderRadius: "20px",
            border: "2px soild #f56920",
            maxWidth: "400px",
            padding: "5px",
          }}
        >
          <CardContent>
            <Typography style={{ textAlign: "left" }}>
              Check out the explore page
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default AppNews;
