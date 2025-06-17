


const Home = () => {
  return (
    <>
      <div>
        <img src="../images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-2 flex items-center justify-center ">
          <h2 className="text-yellow-400 text-7xl font-extrabold pt-[10rem]">Your Perfect<br></br> Vacation Await ...</h2>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="px-20 font-mono text-4xl">Experience serenity, adventure, and luxury <br></br>retreats at the Resorrt.</h1>
        <p className="px-20 pt-8 font-sans tracking-tight">Our resort provides an idyllic escape from the hustle and bustle of everyday life. <br />Whether you're seeking a romantic getaway, a family vacation, or a serene retreat, Resorrt promises an unforgettable experience.</p>
      </div>
      <div className="flex gap-20">
        <img src="../images/rktkn-ssOtyGE8CyE-unsplash.jpg" className="h-[300px] w-[450px] mt-10 mx-10 object-cover" />
        <ul className="py-25 text-2xl leading-12 font-sans">
          <li>Exceptional hospitality</li>
          <li>Natural beauty</li>
          <li>Luxurious accommodations</li>
          <li>Sustainability</li>
        </ul>
        <img src="../images/reisetopia-Vl5DAQxNBbM-unsplash.jpg" className="h-[400px] w-[400px] mt-10 mx-10 object-cover" />
      </div>
      <div className="mt-20 flex">
        <img src="../images/visualsofdana-T5pL6ciEn-I-unsplash.jpg" />
        <div className="bg-gray-950 w-full text-white">
          <h1 className="px-10 mt-20 text-4xl text-gray-100 leading-20 font-bold ">Rooms</h1>
          <p className="px-10 tracking-tight text-xl  font-sans">Enjoy spacious comfort and modern amenities in our Deluxe Rooms, <br />offering breathtaking views of Resorrt. Ideal for solo travelers <br /> or couples seeking a serene retreat.</p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center font-light tracking-wider text-6xl">Variety of activities</h1>
        <div className="relative flex gap-10 mt-10 px-8">
          <img src="../images/deva-darshan-7FL83f1M3fg-unsplash.jpg" className="h-[300px] w-[300px] opacity-80 object-cover mt-1.5" />
          <h2 className="absolute bottom-40 px-5 text-black text-4xl tracking-widest font-bold ">Water Sport</h2>
          <div className="relative">
            <img src="../images/jan-kohl-NIKDyh6iya0-unsplash.jpg" className="h-[300px] w-[300px] opacity-80 object-cover mt-1.5" />
            <h2 className="absolute bottom-40 px-6 text-black text-3xl tracking-widest font-bold ">Advantures</h2>
          </div>
          <div className="relative">
            <img src="../images/gabin-vallet-J154nEkpzlQ-unsplash.jpg" className="h-[300px] w-[300px] opacity-80 object-cover mt-1.5" />
            <h2 className="absolute bottom-40 px-6 text-black text-3xl tracking-widest font-bold ">Fitness &Yoga</h2>
          </div>
          <div>
            <img src="../images/todd-trapani-sI-p_NLBNr0-unsplash.jpg" className="h-[300px] w-[300px] opacity-80 object-cover mt-1.5" />
            <h2 className="absolute bottom-33 px-8  text-black text-3xl tracking-widest font-bold ">Outdoor<br></br>recreations</h2>
          </div>
        </div>
      </div>
      <h1 className="text-6xl tracking-widest px-10 mt-20">What our guests say <br></br>about us</h1>
      <div className="flex">
        <div className="border-1 w-[25rem] h-[15rem] border-zinc-400 mt-20 mx-10">
          <h3 className="pb-15 pt-2 p-10 text-orange-400 text-xl font-bold">Absolutely stunning resort</h3>
          <p className="px-10 ">Particular way thoroughly unaffected projection favorable Mrs can be projecting own.</p>
          <h4 className="px-8 pt-9 font-light"> - Carolyn Ortiz</h4>
        </div>
        <div className="border-1 w-[25rem] h-[15rem] border-zinc-400 mt-20 mx-10">
          <h3 className="pb-15 pt-2 p-10 text-orange-400 text-xl font-bold">Exceptional dining experience</h3>
          <p className="px-10">The bore of true of no be deal. Frequently sufficient to be unaffected. The furnished she concluded depended on procuring concealed.</p>
          <h4 className="px-8 pt-5 font-light">- Louis Crawford</h4>
        </div>
        <div className="border-1 w-[25rem] h-[15rem] border-zinc-400 mt-20 mx-10">
          <h3 className="pb-10 pt-1.5 p-10 text-orange-400 text-xl font-bold">The perfect venue for a wedding</h3>
          <p className="px-10">Departure is defective arranging rapturous did believe him all had supported.</p>
          <h4 className="px-8 pt-8 font-light">- Samuel Bishop</h4>
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

export default Home