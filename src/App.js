import React, { Component } from "react";
import Main_Blog from "./Blog/Main_Blog/Main_Blog";
import Home from "./Home/Home";
import Blog_detials from "./Blog-detials/Blog_detials";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Menu from "./Menu/Menu";
import Services from "./Services/Services";
import Detials_Services from "./Services/Detials_services/Detials_Services";
import "./App.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Menu/>
        </div>
        <div className="App1">
        <Routes>
          <Route path="StartUp/" Component={Home} />
          <Route path="StartUp/blogs/" Component={Main_Blog} />
          <Route path="/blogs/:Headings" Component={Blog_detials} />
          <Route path="StartUp/services/" Component={Services} />
          <Route path="/services/detials" Component={Detials_Services} />
        </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
