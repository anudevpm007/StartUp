import React, { Component } from "react";
import "./Home_body.css";
import services_data from "../../Data/Services_data";
import Services from "./services/services";

 class Home_body extends Component {
  render() {
    return (
      <div className="Home_body">
        
        <div className="container">
          <h1>Services</h1>
        <div className="row">
          {
            services_data.map((data)=>
              <Services id = {data.id} heading = {data.Heading} pera = {data.Pera}/>
            )
          }
          </div>
      </div>
      </div>
    );
  }
}
export default Home_body;
