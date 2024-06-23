import React, { Component } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";
import Header_L from "./Header_L/Header_L";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <header>
          <Header_L/>
        </header>
      </div>
    );
  }
}
