import React, { Component } from "react";
import "./Home.css";
import Menu from "../Menu/Menu";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <header>
          <div>
            <Menu/>
          </div>
        </header>
      </div>
    );
  }
}
