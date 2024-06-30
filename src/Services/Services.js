import React, { Component, useRef } from 'react'
import S_box from './S_box';
import './S_box.css';
import services_data from '../Data/Services_data';
export default function Services(){
  
    var url = window.location.pathname;
    var urls = url.split("/");
    const urlid = urls[urls.length - 1];
    
    return (
      <div className='Main_services'>
        <div className="container">
          <p style={{marginTop:10}}>
             We are providing this services that mention belove 
          </p>
        <h2>Services</h2>
        {
          services_data.map((data)=><S_box id={data.id} heading={data.Heading} pera={data.Pera}/>)
        }
        </div>
      </div>
    )
  }
