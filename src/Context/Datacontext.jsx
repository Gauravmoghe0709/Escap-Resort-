import { createContext } from "react"
import { useState } from "react"


export const userdata = createContext(null)
    
const Datacontext = (props) => {
         const [carddata, setcarddata] = useState([

            {
            id:1,
            image:"../images/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg",
            heading:"Friendly & Responsive Service",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolorem!",
        },
        {
            id:2,
            image:"../images/runnyrem-LfqmND-hym8-unsplash.jpg",
             heading:"Safety & Security",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolorem!",
        },   
         {
            id:3,
            image:"../images/ramiro-mendes-NpbAlaDAjgs-unsplash.jpg",
             heading:"Functional Kitchen Facilities",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolorem!",
        } ,
         {
            id:4,
             image:"../images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg",
             heading:"Comfortable Sleeping Arrangements",
             paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolorem!",
        },
         {
            id:5,
            image:"../images/jared-rice-PibraWHb4h8-unsplash.jpg",
             heading:"Clean & Well-Maintained Bathrooms",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolorem!",
        },
         {
            id:6,
            image:"../images/markus-spiske-L-mHnEJXR6A-unsplash.jpg",
             heading:"Free High-Speed Wi-Fi Connectivity",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolorem!",
        }])
        const [formdata, setformdata] = useState([{
        name :"Admin",
        email:"Admin@escap.com",
        phone:"121",
        message:"this is a admin",
        }])
        const [Aboutme, setAbout] = useState({
            image:"../images/ruth-durbin-fWhrnLVu4M4-unsplash.jpg",
             heading:"Your home away from home",
            paragraph:"Welcome to Resorrt, where luxury meets tranquillity in the heart of Goa",
        })
       
  return (
    <>
        <userdata.Provider value={{carddata, setcarddata,Aboutme, setAbout,formdata, setformdata}}>
            {props.children}
        </userdata.Provider>
   </>
  )
}

export default Datacontext