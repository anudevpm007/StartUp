import React, { Component } from "react";
import "./Landing.css";
import Menu from "../Menu_Bar/menu";
import Floating_button from "./footer/Join_Bts";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Landing extends Component {
  render() {
    return (
      <div id="body">
        <div id="main">
          <div id="container">
            <div id="header">
                  <div id="logo">
                    <img src={require("./Logo.png")} alt="N/A" />
                  </div>
                <div className="col">
                  <Menu />
                </div>
            </div>
          </div>
          <Floating_button />
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </div>
    );
  }
}

export default Landing;
