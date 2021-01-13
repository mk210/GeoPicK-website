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
            maxWidth: "700px",
            boxShadow:
              "1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),28px 28px 28px 0 rgba(34, 33, 81, 0.25)",
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
