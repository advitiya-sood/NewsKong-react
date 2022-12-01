import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, date, author,source } = this.props;
    return (
      <div>
        <div className="card my-2">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-secondary"  style={{left: '90%', zIndex:1,}}>
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                Published By: {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
