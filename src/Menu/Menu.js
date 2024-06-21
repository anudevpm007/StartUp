import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";


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
            <Link to={"/StartUp/home"} className="links">Home</Link>
            <Link to={"/StartUp/blogs/"} className="links">Blog</Link>
            <Link href="#" className="links">Services</Link>
            <Link href="#" className="links">About Us</Link>
            <Link href="#" className="links">Course</Link>
            <Link href="#" className="links">Events</Link>

          </div>
        </nav>
        
      </div>
    );
  }
}
