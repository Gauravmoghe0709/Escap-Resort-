import { useContext } from "react"
import { userdata } from "../Context/Datacontext"
import { toast } from "react-toastify"
import { useForm} from "react-hook-form"


const Contact = () => {

const {formdata,setformdata} = useContext(userdata) 
console.log(formdata)

    const{register,handleSubmit,reset} = useForm()

    const submitform=(data)=>{ 
    
        let x = [...formdata]
        x.push(data)
        setformdata(x)
        toast.success("form submitted...")
        reset()
    }
  return (
    <>
      <div className="flex gap-30 mt-20 bg-[#fafaef]">
        <form className="mx-20 flex flex-col gap-10" onSubmit={handleSubmit(submitform)}>
          <input {...register("name")} type="text" className="border-1 border-gray-300 w-[33rem] h-10 px-10" placeholder="Name"
            
          />
          <div className="flex gap-9">
            <input {...register("email")} type="Email" className="border-1 border-gray-300 w-fit h-10 px-8" placeholder="Email"
              
            />
            <input {...register("Phone Number")} type="text" className="border-1 border-gray-300  w-60 h-10 px-8" placeholder="Phone Number"
              
            />
          </div>
          <input {...register("message")} type="text" className="border-1 border-gray-300 w-[33rem] h-[10rem] px-10" placeholder="Message"
           
          />
          <div> <button className="w-30 h-10 bg-orange-400 font-xl">Submit</button></div>
        </form>
        <div>
          <h1 className="text-6xl font-mono">Contact Us</h1>
          <p className="pt-20 font-bold">Whether you have a question, need assistance, or simply want to provide feedback, we're here to help.</p>
        </div>
      </div>
      <div className=" mt-20 flex gap-30 px-10">

        <div className="border-1 border-gray-300 font-thin w-[20rem] h-[6rem] pt-4">
          <h1 className="font-bold px-10">Address</h1>
          <h2 className=" px-7 pt-3">Region 4,Tiswadi,Region 3: North Goa</h2>
        </div>
        <div className="border-1 border-gray-300 font-thin w-[20rem] h-[6rem] px-4 pt-4">
          <h1 className="font-bold px-10">Phone number</h1>
          <h2 className="px-9 pt-3">+91 8121753838</h2>
        </div>
        <div className="border-1 border-gray-300 font-thin w-[20rem] h-[6rem] px-4 pt-4">
          <h1 className="font-bold px-10">Email address</h1>
          <h2 className="px-9 pt-3">hello@example.com</h2>
        </div>


      </div>
      <div className="mt-20">
        <div className="flex relative">
          <img src="../images/bernard-hermant--IwbJJfoC80-unsplash.jpg" className="w-1/2 h-2/3 object-cover opacity-88" />
          <h1 className="absolute bottom-[60%] px-60 text-5xl tracking-widest text-yellow-600">Escap...</h1>
          <h3 className="absolute top-[75%] px-30 text-2xl ">Region 4,Tiswadi,Region 3: North Goa</h3>
          <h3 className="absolute top-[79%] px-30 text-3xl ">+91 8121753838</h3>
          <div>
            <h1 className="text-3xl p-20 font-mono tracking-wide">Contact Us for resort updates</h1>
            <form className="mt-25 mx-20">
              <input type="email" placeholder="Enter Your Email Id.." className=" border-b-1 px-5 outline-0 border-amber-600" />
              <button className=" px-6 bg-orange-400 h-[5vh] font-medium mx-10 outline-0" type="submit">Sent Message</button>
            </form>
            <h3 className="mt-30 px-22 text-2xl font-mono">Utility pages</h3>
            <div className="flex gap-10 ">
              <div className="list-none text-xl pt-20 px-10 leading-loose">
                <li className="hover:text-orange-400">Home</li>
                <li className="hover:text-orange-400">About</li>
                <li className="hover:text-orange-400">Accomodations</li>
                <li className="hover:text-orange-400">Dining</li>
                <li className="hover:text-orange-400">Locations</li>
              </div>
              <div className="pt-20 list-none text-xl leading-loose">
                <li className="hover:text-orange-400">Event </li>
                <li className="hover:text-orange-400">Blog</li>
                <li className="hover:text-orange-400">Contact</li>
                <li className="hover:text-orange-400">FAQ`s</li>
                <li className="hover:text-orange-400">Privacy Policy</li>
              </div>
              <div className="pt-20 list-none text-xl leading-loose">
                <li className="hover:text-orange-400">Style Guide </li>
                <li className="hover:text-orange-400">Instruction</li>
                <li className="hover:text-orange-400">Changelog</li>
                <li className="hover:text-orange-400">Licenses</li>
              </div>
              <div className="pt-20 list-none text-xl leading-loose ">
                <li className="hover:text-orange-400">Coming Soon </li>
                <li className="hover:text-orange-400">Error 404</li>
              </div>
            </div>
            <h1 className="mt-25 px-10 text-5xl tracking-wider font-mono">Speak To Us today</h1>
            <div className="w-[40vw] border-1 mt-5 mx-5 border-gray-300 "></div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Contact 