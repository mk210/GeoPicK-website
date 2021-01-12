import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export class CustomCard extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            borderRadius: "30px",
            background: "#FAFAFA",
            width: "50%",
            border: "5px solid #F56920",
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
            <CardContent style={{}}>{this.props.content}</CardContent>
          </div>
        </Card>
      </div>
    );
  }
}
