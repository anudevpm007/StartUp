import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
export default class Blog extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.image);
    this.state = {
      image: (props.image).toString(),
      heading: props.heading,
      peragraph: props.peragraph,
    };
  }
  render() {
    return (
      <div className="blog">
        <div className="blog-main-box">
          <center>
            <img src={this.state.image} alt="N?a" />
          </center>
          <header>
            <Link className="Link"> {this.state.heading} </Link>
          </header>
          <footer>
            <p>{this.state.peragraph}</p>
          </footer>
        </div>
      </div>
    );
  }
}
