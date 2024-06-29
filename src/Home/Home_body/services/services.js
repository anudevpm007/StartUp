import React, { Component } from "react";
import { Card, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./services.css";
export default class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.state = {
      id: this.props.id,
      Heading: this.props.heading,
      Pera: this.props.pera,
    };
    return (
      <div className="col-lg-6">
        <Link to={"/StartUp/services/"} className="S_link" style={{ textDecoration: "none" }}>
          <Card
          className="S_card"
            style={{
              padding: 10,
              margin: 30,

              boxShadow: "black 2px 2px 5px",
            }}
          >
            <Card.Title>{this.state.Heading}</Card.Title>
            <Card className="I_S_card" style={{ padding: 10, marginTop: 10 }}>
              <CardText id="ser_link">{this.state.Pera}</CardText>
            </Card>
          </Card>
        </Link>
      </div>
    );
  }
}
