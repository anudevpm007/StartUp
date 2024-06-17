import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import "./Landing.css";
import Menu from "../Menu_Bar/menu";
import Floating_button from "./footer/Join_Bts";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Menu_button from "../Menu_Bar/Menu_button/Menu_button";

class Landing extends Component {
  render() {
    return (
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
          <div className="body">
            <Outlet />
            <footer>
              <h1>Company detials</h1>
            </footer>
          </div>
          {/* <Menu_button/> */}
        </div>

        <Floating_button />
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </div>
    );
  }
}

export default Landing;
