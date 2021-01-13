import React, { Component } from "react";
import { Container, Card, Typography } from "@material-ui/core";

export class Footer extends Component {
  render() {
    return (
      <Container fixed style={{ padding: "10px" }}>
        <Card
          style={{
            height: "100px",
            width: "auto",
            alignContent: "center",
            borderRadius: "20px",
            color: "#1b1b1b",
            margin: "5px",
            padding: "10px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "#F56920",
              textAlign: "end",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}
          >
            The GeoPicK Team
          </Typography>
        </Card>
      </Container>
    );
  }
}
