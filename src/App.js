import React,{ Component } from 'react';
import Landing from './Components/Landing/Landing';
import Main_Blog from './Components/Blog/Main_Blog/Main_Blog';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "",
    element: <Landing/>,
    children: [
      {
        path: "/blogs/",
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
