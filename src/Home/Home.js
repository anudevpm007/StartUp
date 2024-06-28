import React, { Component } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";
import Header_L from "./Header_L/Header_L";
import Home_body from "./Home_body/Home_body";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <header>
          <Header_L/>
        </header>
        <body>
          <Home_body />
        </body>
      </div>
    );
  }
}
