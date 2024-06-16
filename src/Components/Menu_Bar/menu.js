import React, { Component } from "react";
import "./menu.css";

import Side_bar from "./side_bar/side_bar";

export default class Menu extends Component {
  render() {
    const open = () =>{
      const list = document.querySelector("ul");
      list.style.flexDirection = "column";
      list.style.display = "flex";
      const btn = document.querySelector('.M_bt')
      btn.style.display = "none";
      const btn2 = document.querySelector('.ret')
      btn2.style.display = "block";
      btn2.style.width = "180px"
      const width = document.querySelectorAll('.bt')
      for(let i = 0;i<width.length;i++){
        width[i].style.width = "180px";
        width[i].style.height = "40px";
      }
      
    }
    const close=()=>{
      const list = document.querySelector("ul");
      list.style.flexDirection = "row";
      list.style.display = "none";
      const btn = document.querySelector('.M_bt')
      btn.style.display = "block";
      const btn2 = document.querySelector('.ret')
      btn2.style.display = "none";
    }
    return (
      <div id="Menu-bar">
        <div className="side_bar">
          <ul className="list">
            <li>
              <button type="button" className="ret" onClick={close}>
                <img src={require("./cross.jpg")} alt="" />
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                Home
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                Blog
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                Course
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                Services
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                Events
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                About Us
              </button>
            </li>
          </ul>
          <div id="Bt">
          <button type="button" className="M_bt" onClick={open}>
            <img src={require("./side.png")} alt="" srcset="" />
          </button>
          </div>
        </div>
      </div>
    );
  }
}
