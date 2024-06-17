import React, { Component } from "react";
import Blog from "../Blog";
import Main_Data from "../../../Data/Blog_data";
import "./Main_Blog.css"

export default class Main_Blog extends Component {
  render() {
    console.log(Main_Data)
    return (
      <div className="Main_Blogs">

        <h1>
          Blogs
        </h1>
        <div className="Main_blog_List">
        {
          Main_Data.map((Data)=><Blog
          image={Data.image}
          heading={Data.heading}
          peragraph={Data.paragraph}
        ></Blog> )
        }
        </div>
          
      </div>
    );
  }
}
