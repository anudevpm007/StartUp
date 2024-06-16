import React,{ Component } from 'react';
import Landing from './Components/Landing/Landing';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "*",
    element: <Landing/>,
  },
]);


class App extends Component{
  render(){
    return(
      <div>
      <RouterProvider router={router} />

      </div>
    );
  }
}



export default App;
