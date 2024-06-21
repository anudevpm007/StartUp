import React,{ Component } from 'react';
import Main_Blog from './Blog/Main_Blog/Main_Blog';
import Home from './Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  
    {
      path: "StartUp/",
      element: <Home/>
    },
    {
      path: "/StartUp/blogs/",
      element: <Main_Blog/>,
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
