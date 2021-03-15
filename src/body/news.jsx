import React, { Component } from 'react';
import NewsApi from 'newsapi';
class News extends Component {
    NewsFind=()=>{
        newsapi.v2.sources({
            category: 'technology',
            language: 'en',
            country: 'us'
          }).then(response => {
            console.log(response);
    }
}
    render() { 
        return (<div>
            <span>{response.category}</span>
        </div>);
    }
}
 
export default News;