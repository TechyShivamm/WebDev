import { createBrowserRouter,Outlet } from "react-router-dom"
import Body from "./Component/Body"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import About from "./Component/About"
import Login from "./Component/Login"
import ContectUs from "./Component/ContactUs"

function App() {
    return (
     <>
       <Header/>
       <Outlet/>
       <Footer/>
         
     </>
   )
 }
 const  appRouter=createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contactus",
          element:<ContectUs/>
        },
        {
          path:"login",
          element:<Login/>
        }
      ]
    }
    ])
    export default appRouter