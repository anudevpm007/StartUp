import React, { Component } from "react";
import Blog from "../Blog";
import Main_Data from "../../Data/Blog_data";
import "./Main_Blog.css"
import Menu from "../../Menu/Menu";
export default class Main_Blog extends Component {
  render() {
    return (
      <div className="Main_Blogs" style={{backgroundColor:"rgb(215, 219, 219)"}}>
        
        <h1 style={{color:"black", fontWeight:"bolder", fontFamily:"sans-serif"}}>Blogs</h1>
        <div className="container" style={{width:"70%"}}>
        <div className="row">
        {
          Main_Data.map((Data)=><div className="col-lg-6">
            <Blog
          media_type = {Data.media_type}
          media={Data.media}
          heading={Data.heading}
          peragraph={Data.paragraph}
          id={Data.id}
          width = {Data.width}
          height = {Data.height}
        ></Blog>
          </div> )
        }
        </div>
        </div>
          
      </div>
    );
  }
}
