// import React, { Component } from "react";
import "./menu.css";
// import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const naigate = useNavigate();
  var x = window.matchMedia("(min-width: 900px)");
  var y = window.matchMedia("(max-width: 300px)");
  const SOpen = () =>{
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

  // const open=()=>{
  //   if(y.matches){
  //     window.open("https://www.w3schools.com")
  //   }else{
  //     SOpen();
  //   }
  // }
  const Close=()=>{
    const width = document.querySelectorAll('.bt')
    const list = document.querySelector("ul");
    list.style.flexDirection = "row";
    list.style.display = "none";
    const btn = document.querySelector('.M_bt')
    btn.style.display = "block";
    const btn2 = document.querySelector('.ret')
    btn2.style.display = "none";
    if(x.matches){
      console.log("hello");
      list.style.removeProperty("flexDirection");
      list.style.removeProperty("display");
      btn.style.removeProperty("display");
      btn2.style.removeProperty("display");
      for(let i = 0;i<width.length;i++){
        width[i].style.width = "100px";
        width[i].style.height = "40px";
      }
    }
    
    
  }
  return (
    
      <div id="Menu-bar">
        <div className="side_bar">
          <ul className="list">
            <li>
              <button type="button" className="ret" onClick={Close}>
                <img src={require("./cross.jpg")} alt="" />
              </button>
            </li>
            <li>
              <button type="button" className="bt">
                Home
              </button>
            </li>
            <li>
              <button type="button" className="bt" onClick={()=>naigate("/blogs")} >
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
          <button type="button" className="M_bt" onClick={SOpen}>
            <img src={require("./side.png")} alt="" srcset="" />
          </button>
          </div>
        </div>
      </div>
    );
}

