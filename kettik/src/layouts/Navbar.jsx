import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useState } from 'react'

import search from '../assets/search.svg'
import place_icon from '../assets/place_icon.svg'
import logo from '../assets/KETTIK.svg'
import user_icon from '../assets/user_icon.svg'

import search__active from '../assets/search__active.svg'


import '../assets/style/Navbar.css'

const ImageSwitcher = ({ defaultSrc, hoverSrc, alt }) => {
   const [isHovered, setIsHovered] = useState(false);
 
   return (
     <img
       src={isHovered ? hoverSrc : defaultSrc}
       alt={alt}
       onMouseOver={() => setIsHovered(true)}
       onMouseOut={() => setIsHovered(false)}
       style={{
         transition: '0.3s ease', 
       }}
     />
   );
 };
const Navbar = () => {
   return (
      <>
      
         <nav className='nav'>
            <div className='logo-place'>
               <Link to="/" className='site-title'>
                  <img src={logo} alt="" />
               </Link>
               <div className="place">
                  <img src={place_icon} alt="" />
                  <select name="" id="">
                     <option value="">Almaty</option>
                     <option value="">2</option>
                     <option value="">3</option>
                     <option value="">4</option>
                     <option value="">5</option>
                  </select>
               </div>
            </div>
            <ul>
               <CustomLink to="/">Main</CustomLink>
               <CustomLink to="/event">Event</CustomLink>
               <CustomLink to="/about">About</CustomLink>
               <select name="" id="lang-button" style={{marginLeft:'0.8em'}}>
                  <option value="">ru</option>
                  <option value="">en</option>
               </select>
               <CustomLink to="/profile" style={{marginLeft:'1em'}}>
                  <ImageSwitcher defaultSrc={user_icon} hoverSrc={user_icon}/>
               </CustomLink>
               <CustomLink to="/catalog" >
                  <ImageSwitcher defaultSrc={search} hoverSrc={search__active}/>
               </CustomLink>
            </ul>
         </nav>
      </>
   )
}
function CustomLink({ to ,children, ...props}){
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end:true})
   return(
     <>
      <li className={isActive? "active" : ""}>
         <Link to={to} {...props}>
            {children}
         </Link>
      </li>
     </>
   )
}

export default Navbar