import React, { Component } from "react";
import "./Blog_detials.css";
import { useParams } from "react-router-dom";
import Main_Data from "../Data/Blog_data";
import { Card, CardBody } from "react-bootstrap";
class Blog_detials extends React.Component {
  render() {
    var url = window.location.pathname;
    var urls = url.split("/");
    const urlid = urls[urls.length - 1];
    var i = 0;
    

    while (i < Main_Data.length) {
      if (Main_Data[i].id.toString() == urlid) {
        break;
      }
      i++;
    }
    this.state = {
      read: Main_Data[i].Read,
      type: Main_Data[i].media_type,
      heading: Main_Data[i].heading,
      paragraph: Main_Data[i].paragraph,
      media: Main_Data[i].media,
      content: Main_Data[i].Read.Content,
      Heading: Main_Data[i].Read.Heading,
    };

    if (this.state.type === 1) {
      console.log(this.state.Read);
      return (
        <div className="blog_detials">
          <div className="container">
            <div className="row">
              <Card>
                <div
                  className="row"
                  id="D_head"
                  style={{
                    border: "solid black 1px",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <div className="col-lg">
                    <CardBody>
                      <Card.Title
                        style={{ fontSize: 30, fontWeight: "bolder" }}
                      >
                        {this.state.heading}
                      </Card.Title>
                      <Card.Img
                        src={this.state.media}
                        className="D_img"
                        style={{  marginTop: 20 }}
                      />
                    </CardBody>
                  </div>
                  <div className="col-lg" id="Sub">
                    <CardBody>
                      <Card.Text style={{ fontSize: 22, fontWeight: "600" }} className="pera">
                        {this.state.paragraph}
                      </Card.Text>
                    </CardBody>
                  </div>
                </div>
                <div className="row" style={{ width: "90%", margin: "10px" }}>
                  <Card.Title>Read More</Card.Title>
                  {this.state.read.Heading.map((DataI, i) => {
                    console.log(i);
                    return (
                      <div>
                        <Card.Text
                          style={{
                            marginLeft: "30px",
                            fontWeight: 700,
                            fontSize: 20,
                          }}
                        >
                          {DataI}
                        </Card.Text>
                        <Card.Text
                          style={{ marginLeft: "60px", fontWeight: 500 }}
                        >
                          {this.state.content[parseInt(i)]}
                        </Card.Text>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      );
    } else if (this.state.type === 2) {
      return (
        <div className="blog_detials">
          <div className="container">
            <div className="row">
              <Card>
                <div
                  className="row"
                  style={{
                    border: "solid black 1px",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <div className="col-lg">
                    <CardBody>
                      <Card.Title
                        style={{ fontSize: 30, fontWeight: "bolder" }}
                      >
                        {this.state.heading}
                      </Card.Title>
                      <iframe
                        style={{
                          width: "100%",
                          overflow: "hidden",
                          padding: "2px",
                          borderRadius: "7px",
                          height:"300px"
                        }}
                        src={this.state.media}
                        title="YouTube video"
                        className="embed-responsive-item"
                        allowFullScreen
                        height={this.state.height}
                      ></iframe>
                    </CardBody>
                  </div>
                  <div className="col-lg" id="Sub">
                    <CardBody>
                      <Card.Text style={{ fontSize: 22, fontWeight: "600"  }}>
                        {this.state.paragraph}
                      </Card.Text>
                    </CardBody>
                  </div>
                </div>
                <div className="row" style={{ width: "90%", margin: "10px" }}>
                  <Card.Title>Read More</Card.Title>
                  {(this.state.Heading).map((DataI, i) => {
                    console.log(i);
                    return (
                      <div>
                        <Card.Text
                          style={{
                            marginLeft: "30px",
                            fontWeight: 700,
                            fontSize: 20,
                          }}
                        >
                          {DataI}
                        </Card.Text>
                        <Card.Text
                          style={{ marginLeft: "60px", fontWeight: 500 }}
                        >
                          {this.state.content[parseInt(i)]}
                        </Card.Text>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Blog_detials;
