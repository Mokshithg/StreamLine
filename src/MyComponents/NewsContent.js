import React, { Component } from 'react'

export class NewsContent extends Component {    
  render() {
    let {title,description,imgurl,newsurl} = this.props
    return (
      <div className='container my-2'>
            <div className="card mx-3" style = {{width: '15rem'}}>
            <img src={!imgurl?"https://www.numerama.com/wp-content/uploads/2023/01/mercedesces2023.jpg":imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} className="btn btn-sm btn-dark btn-primary">View More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsContent
  