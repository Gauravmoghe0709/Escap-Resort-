import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"



const Mainroute = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </>
  )
}

export default Mainroute