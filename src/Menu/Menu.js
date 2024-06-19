import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav>
        <div className="S-logo"><img className="logo" src={require("./Logo.png")} alt="N/A"/></div>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-bt">
            <img src={require("./Menu.png")} alt="N/A"/>
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-bt">
            <img src={require("./Menu2.png")} alt="N/A"/>
            </label>
            <div className="M-logo"><img className="logo" src={require("./Logo.png")} alt="N/A"/></div>
            <a href="#" className="links">Home</a>
            <a href="#" className="links">Blog</a>
            <a href="#" className="links">Services</a>
            <a href="#" className="links">About Us</a>
            <a href="#" className="links">Course</a>
            <a href="#" className="links">Events</a>

          </div>
        </nav>
      </div>
    );
  }
}
