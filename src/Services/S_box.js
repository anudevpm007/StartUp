import React, { Component } from "react";
import "./S_box.css";
import { Card, CardText, CardTitle } from "react-bootstrap";

export default class S_box extends Component {
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
      <div className="S_box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8" >
              <Card id="Service_card">
                <div className="row">
                  <div className="col-4" > 
                    <CardTitle   style={{ padding: 10 }}>{this.state.Heading}</CardTitle>
                  </div>
                  <div className="col-8">
                    <CardText
                    id="Services_title"
                      style={{
                        
                        backgroundColor: "black",
                        color: "white",
                        padding: 10,
                        paddingLeft:30
                      }}
                    >
                      {this.state.Pera}
                      <CardText
                        style={{
                            marginTop:10,
                            
                          padding: 5,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ color: "white" }}>jhone</div>
                        <div style={{ color: "white" }}>12/03/2024</div>
                      </CardText>
                    </CardText>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
