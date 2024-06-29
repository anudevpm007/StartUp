import React, { Component } from "react";
import { motion } from "framer-motion";
import "./Header_L.css";

export default class Header_L extends Component {
  render() {
    return (
      <div id="Header_L">
        <header>
          <div>
            <motion.div animate={{ marginRight: 0 }} style={{marginLeft:10}} className="Logo_text">
              <h5>Since 2024</h5>
              <h1>
                Welcome to <span>INKOGSEK</span>
              </h1>
              <h4>CYBER SECURITY LAB AND ACADEMY</h4>
            </motion.div>
            <motion.img src={require("../../images/Logo.png")} alt="N/a" />
            
          </div>
          <div className="H_Join_div">
            <button>Join Us</button>
          </div>
        </header>
      </div>
    );
  }
}
