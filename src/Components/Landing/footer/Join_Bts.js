import React, { Component } from 'react'
import "./Join_Bts.css";
import Menu_button from '../../Menu_Bar/Menu_button/Menu_button';
export default class Floating_button extends Component {
  render() {
    return (
      <div className="row-1">
        <div >
          <button type='button' id='join'>Join Us</button>
        <div className="Secbt">
          <Menu_button/>
          </div>
        </div>
      </div>
    )
  }
}
