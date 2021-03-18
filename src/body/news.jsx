import { Box, Button } from "@material-ui/core";
import React, { Component } from "react";
import "./news.css";

class News extends Component {
  constructor() {
    super();
    this.state = {
      data: "Hey",
    };
  }
  componentDidMount() {
    this.searchNews().then((result) => this.setState({ data: result }));
  }
  searchNews = async () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const fullDate = year + "-" + month + "-" + date; //for the current date
    try {
      const response =
        "https://newsapi.org/v2/everything?" +
        `q=instagram&` +
        `from=${fullDate}&` +
        "sortBy=popularity&" +
        "apiKey=c169b81c042e4f52aeebc491a01fd98d";
      const body = new Request(response);
      //   return body.value;
      fetch(body)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          // console.log(jsonData.articles[1].description);
          // return <div>{jsonData.articles[1].description}</div>;
          this.setState({ data: jsonData.articles[1].description });
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Box>
        <Button variant="contained" color="primary" onClick={this.searchNews}>
          Get News
        </Button>
        {/* {this.searchNews &&
          this.searchNews((desc) => {
            console.log("it workedd!");
            return <div>{desc.authors}</div>;
          })} */}
        {/* <div>{this.state.data}</div> */}
      </Box>
    );
  }
}

export default News;
