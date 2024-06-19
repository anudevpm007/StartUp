import React,{ Component } from 'react';
import Home from './Home/Home';
import Main_Blog from './Blog/Main_Blog/Main_Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "StartUp/",
    element: <Home/>,
    children: [
      {
        path: "/StartUp/blogs/",
        element: <Main_Blog/>,
      },
    ]
    
  },
  
]);


class App extends Component{
  render(){
    return(
      <RouterProvider router={router} />

    );
  }
}



export default App;
