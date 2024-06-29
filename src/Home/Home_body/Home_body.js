import React, { Component } from "react";
import "./Home_body.css";
import services_data from "../../Data/Services_data";
import Services from "./services/services";

class Home_body extends Component {
  render() {
    return (
      <div className="Home_body">
        <div className="container">
          <div className="row">
            <div className="col-12" style={{marginTop:40, marginBottom:50,fontWeight:"bold",fontSize:18}}>
            Only AMD Ryzen™ processors feature models with exclusive AMD 3D V-Cache™ technology for a massive gaming performance boost.4 AMD combines its top-end Ryzen 7000X3D series processors, with up to a colossal 144MB of on-chip memory, paired with the most advanced processor cores you can get in a gaming PC so enthusiasts can harness the power of the ultimate gaming and creator performance in one chip.5 No workload is off limits with AMD Ryzen processors.
            </div>
          </div>
          <h1>Services</h1>
          <div className="row">
            {services_data.map((data) => (
              <Services id={data.id} heading={data.Heading} pera={data.Pera} />
            ))}
          </div>
          <div className="row">
            <div className="col-12" style={{marginTop:40, marginBottom:50,fontWeight:"bold",fontSize:18}}>
            The Internet of things describes devices with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks. The Internet of things encompasses electronics, communication, and computer science engineering
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home_body;
