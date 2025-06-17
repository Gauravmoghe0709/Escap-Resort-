import { useContext } from "react"
import { userdata } from "../Context/Datacontext"


const About = () => {
 
  let {carddata,Aboutme} = useContext(userdata)

    let cardsdata = carddata.map(data=> data)

  return (

    <>
    <div className="relative">
        <img src={Aboutme.image}/>
        <h1 className="absolute bottom-[50%] px-30 text-amber-50 text-8xl font-bold tracking-tighter font-mono">{Aboutme.heading}</h1>
      <p className="absolute bottom-[43%] px-30 text-white text-2xl  tracking-tighter font-mono">{Aboutme.paragraph }</p>
    </div>
    <div className="mt-20">
      <h1 className="px-20 text-5xl tracking-tight text-green-950">Everything you need for<br></br> an amazing get-away</h1>
      <div className="flex gap-10 px-5">
        <div key={cardsdata[0].id} className="border-1 rounded-4xl w-[25rem] h-[24rem] border-zinc-400 mt-20 ">
          <img src={cardsdata[0].image} className="h-[30vh] w-[30vw] object-cover" />
        <h3 className="text-2xl pt-5 px-10 text-orange-600 font-bold ">{cardsdata[0].heading}</h3>
        <p className="px-15 pt-5 text-[18px] font-bold">{cardsdata[0].paragraph}</p>
      </div>

      <div key={cardsdata[1].id} className="border-1 rounded-4xl w-[25rem] h-[24rem] border-zinc-400 mt-20">
          <img src={cardsdata[1].image} className="h-[30vh] w-[30vw] object-cover" />
        <h3 className="text-2xl pt-5 px-10 text-orange-600 font-bold">{cardsdata[1].heading}</h3>
        <p className="px-15 pt-5 text-[18px] font-bold">{cardsdata[1].paragraph}</p>
      </div>
      
      <div key={cardsdata[2].id} className="border-1  rounded-4xl w-[25rem] h-[24rem] border-zinc-400 mt-20">
          <img src={cardsdata[2].image} className="h-[30vh] w-[30vw] object-cover" />
        <h3 className="text-2xl pt-5 px-10 text-orange-600 font-bold">{cardsdata[2].heading}</h3>
        <p className="px-15 pt-5 text-[18px] font-bold">{cardsdata[2].paragraph}</p>
      </div>
      </div>
      <div className="flex gap-10 px-5 ">
        <div key={cardsdata[3].id} className="border-1 rounded-4xl w-[25rem] h-[24rem] border-zinc-400 mt-20">
          <img src={cardsdata[3].image} className="h-[30vh] w-[30vw] object-cover" />
        <h3 className="text-2xl pt-5 px-10 text-orange-600 font-bold">{cardsdata[3].heading}</h3>
        <p className="px-15 pt-5 text-[18px] font-bold">{cardsdata[3].paragraph}</p>
      </div>

      <div key={cardsdata[4].id} className="border-1 rounded-4xl w-[25rem] h-[24rem] border-zinc-400 mt-20">
          <img src={cardsdata[4].image} className="h-[30vh] w-[30vw] object-cover" />
        <h3 className="text-2xl pt-5 px-10 text-orange-600 font-bold">{cardsdata[4].heading}</h3>
        <p className="px-15 pt-5 text-[18px] font-bold">{cardsdata[4].paragraph}</p>
      </div>

      <div key={cardsdata[5].id} className="border-1 rounded-4xl w-[25rem] h-[24rem] border-zinc-400 mt-20">
          <img src={cardsdata[5].image} className="h-[30vh] w-[30vw] object-cover" />
        <h3 className="text-2xl pt-5 px-10 text-orange-600 font-bold">{cardsdata[5].heading}</h3>
        <p className="px-15 pt-5 text-[18px] font-bold">{cardsdata[5].paragraph}</p>
      </div>

      </div>
     
    </div>
   
        <div className="bg-gray-950 h-fit text-white flex mt-20">          
           <div className=" w-[30rem] px-10 p-20 ">
             <h1 className="text-4xl ">Our mission</h1>
            <p className="pt-8">Our mission is to provide our guests with an unparalleled experience that blends luxury, comfort, and adventure in a serene and picturesque setting. We are dedicated to exceeding expectations by delivering exceptional service, world-class amenities, and a wide array of activities that cater to every guest`s desires.</p>
           </div> 
           <div className="p-20 px-[10rem]">
            <h1 className="text-3xl">Our values</h1>
            <p className="">We prioritize the comfort and satisfaction of our guests, striving to offer the highest level of service and personalized attention.</p>
           <div className="pt-20 flex gap-29 text-xl font-light">
                <h1 className="border-1 border-yellow-900 h-[3.5rem] pt-3 px-2">Sustainability</h1>
                <h1 className="border-1 border-yellow-900 h-[3.5rem] pt-3 px-2 w-fit tracking-tighter">Community engagement</h1>
                <h1 className="border-1 border-yellow-900 h-[3.5rem] pt-3 px-2">Integrity</h1>
             </div>
             <div className="pt-6 flex gap-24 text-xl font-light">
                <h1 className="border-1 border-yellow-900 h-[3.5rem] pt-3 px-2">Excellence</h1>
                <h1 className="border-1 border-yellow-900 h-[3.5rem] pt-3 px-6 w-[8vw] tracking-tighter">Inclusivity</h1>
                <h1 className="border-1 border-yellow-900 h-[3.5rem] pt-3 px-8  w-[20vw]">Quality and consistency</h1>
             </div>
          </div>
          </div>
          <div className="mt-20 ">
            <h1 className="px-20 text-5xl tracking-tight text-green-950">Meet the people behind Resorrt</h1>
            <div className="mt-20 flex gap-10">
              <div ><img src="../images/itay-verchik-G3ZAhAJ2ojc-unsplash.jpg" className="w-[100vw] h-[100vh] object-contain"/> 
                <h2 className="px-10 pt-5 font-bold">Dennis Barrett <br></br>Co-Founder & CEO</h2>
              </div>
              <div><img src="../images/dmitry-rodionov-0Ff-VzG0EZE-unsplash.jpg" className="w-[100vw] h-[100vh] object-cover "/>
              <h2 className="px-10 pt-5 font-bold">Frances Guerrero <br></br>Executive Leader</h2>
              </div>
            <div><img src="../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg" className="w-[100vw] h-[100vh] object-cover"/>
              <h2 className="px-10 pt-5 font-bold">Louis Ferguson <br></br>CEO & Founder</h2>
            </div>
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

export default About  