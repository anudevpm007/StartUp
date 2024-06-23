import React, { Component } from "react";
import Main_Blog from "./Blog/Main_Blog/Main_Blog";
import Home from "./Home/Home";
import Blog_detials from "./Blog-detials/Blog_detials";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Menu from "./Menu/Menu";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([

//     {
//       path: "StartUp/",
//       element: <Home/>
//     },
//     {
//       path: "/StartUp/blogs/",
//       element: <Main_Blog/>,
//     },
//     {
//       path: "/StartUp/blogs/:userid",
//       element: <Main_Blog/>,
//     },

// ]);

class App extends Component {
  render() {
    return (
      // <div>

      //   <RouterProvider router={router} />
      // </div>
      <Router>
        <Menu/>
        <Routes>
          <Route path="StartUp/" Component={Home} />
          <Route path="StartUp/blogs/" Component={Main_Blog} />
          <Route path="/blogs/:Headings" Component={Blog_detials} />
        </Routes>
      </Router>
    );
  }
}

export default App;
