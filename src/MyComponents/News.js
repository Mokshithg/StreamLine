import React, { Component } from 'react'
import NewsContent from './NewsContent'

export class News extends Component {
constructor() {
  super();
  console.log("hey I'm a constructor bro");
  this.state = {
      articles: [], 
  }
}

async componentDidMount(){
  let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dbe847898d6f4bb9acb4090738b8d364";
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
}
  render() {
    return (
      <div className='container'>
        <center>
        <h2><strong>Streamline</strong>-Headlines</h2>
        </center>
         <div className='row my-5 mx-3'>
            {this.state.articles.map((e)=>{
                return <div className='col-md-3' key={e.url}>
                <NewsContent title={e.title?e.title.slice(0,58):""} description={e.description?e.description.slice(0,248):""} imgurl={e.urlToImage} newsurl={e.url}/>
              </div>
            })}
         </div>
      </div>
    )
  }
}

export default News