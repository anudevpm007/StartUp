import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Card, CardBody } from "react-bootstrap";
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      media_type: props.media_type,
      media: props.media.toString(),
      heading: props.heading,
      peragraph: props.peragraph,
      width: props.width,
      height: props.height,
    };
  }
  render() {
    if (this.state.media_type == 1) {
      return (
        <Link className="blog" style={{textDecoration:"none" }} to={"/blogs/"+this.state.id}>
          <Card className="Card" style={{ marginTop: "20px" ,backgroundColor:"white",color:"black"}}>
            <Card.Img src={this.state.media} style={{ height: "40%" ,borderRadius:"14px",padding:"5px"}} />
            <Card.Body>
              <Card.Title className="head">{this.state.heading}</Card.Title>
              <Card.Text>{this.state.peragraph}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
    } else if (this.state.media_type == 2) {
      return (
        <Link className="blog" style={{textDecoration:"none"}} to={"/blogs/"+this.state.id}>
          <Card className="Card" style={{ marginTop: "10px" ,backgroundColor:"white",color:"black"}}>
          <iframe
          style={{width:"100%",overflow:"hidden",padding:"2px",borderRadius:"7px"}}
              src={this.state.media}
              title="YouTube video"
              className="embed-responsive-item"
              allowFullScreen
              height={this.state.height}
            ></iframe>
            
            <Card.Body>
              <Card.Title className="head" style={{paddingBottom:"10px"}}>{this.state.heading} </Card.Title>
              <Card.Text >{this.state.peragraph}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
    }
  }
}
