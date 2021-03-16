import React, { Component } from "react";
import "./news.css";
function getNews() {
  const URL =
    "https://newsapi.org/v2/everything?" +
    "q=Technology&" +
    "from=2021-03-16&" +
    "sortBy=popularity&" +
    "apiKey=c169b81c042e4f52aeebc491a01fd98d";

  const req = new Request(URL);

  fetch(req).then(function (response) {
    console.log(response.json());
  });
}

async function searchNews(q) {
  q = encodeURIComponent(q);
  const response =
    "https://newsapi.org/v2/everything?" +
    `q=${q}&` +
    "from=2021-03-16&" +
    "sortBy=popularity&" +
    "apiKey=c169b81c042e4f52aeebc491a01fd98d";
  const body = new Request(response);
  //   return body.value;
  fetch(body).then(function (response) {
    console.log(response.json());
    // return response.json();
  });
}

function News() {
  const [query, setQuery] = React.useState("Technology");
  const [list, setList] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };
  return (
    <div className="app">
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {!list ? null : list.length === 0 ? (
        <p>
          <i>No results</i>
        </p>
      ) : (
        <ul>
          {list.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
function Item({ item }) {
  const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, "$& ").trim();
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });
  return (
    <li className="item">
      {item.image && (
        <img
          className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      )}
      <h2 className="title">
        <a href={item.url}>{item.name}</a>
      </h2>
      <p className="description">{item.description}</p>
      <div className="meta">
        <span>{formatDate(item.datePublished)}</span>
        <span className="provider">
          {item.provider[0].image?.thumbnail && (
            <img
              className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + "&w=16&h=16"}
            />
          )}
          {item.provider[0].name}
        </span>
        {item.category && <span>{separateWords(item.category)}</span>}
      </div>
    </li>
  );
}
export default News;
