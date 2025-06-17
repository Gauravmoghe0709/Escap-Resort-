
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='bg-[#3e95ef] h-15 flex justify-between pt-3 z-50 relative'>
        <h2 className='px-5 text-2xl font-medium text-white '>Esacp</h2>
      <div className='font-thin text-2xl flex gap-5 px-5'>
         <NavLink to="/" className= {(e)=> e.isActive ? "text-blue-900": "text-white"}>Home</NavLink>
         <NavLink to="/About" className={(e)=> e.isActive ? "text-blue-900": "text-white"}>About Us</NavLink>
          <NavLink to="/Contact" className={(e)=> e.isActive ? "text-blue-900": "text-white"}>Contact Me</NavLink>
        </div>      
    
    </div>
    
    </>
  )
}

export default Navbar