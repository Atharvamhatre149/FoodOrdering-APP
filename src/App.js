import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";




const App=()=> {
    return (
      <div className="App">
        <Header/>
        <Outlet/>
      </div>
    );
  }
  
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
        },
      ],
      errorElement:<Error/>
    },
  
  ]);
  


  const root=ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router={appRouter} />)