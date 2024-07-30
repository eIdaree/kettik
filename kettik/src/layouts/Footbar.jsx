import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import search from '../assets/search.svg'
import place_icon from '../assets/place_icon.svg'
import logo from '../assets/KETTIK.svg'
import user_icon from '../assets/user_icon.svg'
import facebook from '../assets/soc_logo/facebook.svg'
import linkedin from '../assets/soc_logo/linkedin.svg'
import twitter from '../assets/soc_logo/twitter.svg'
import instagram from '../assets/soc_logo/instagram.svg'

import '../assets/style/Footbar.css'

const Footbar = () => {
    return(
        <>
            <footer>
                <div className='above-links'>
                    <CustomLink to="/profile" style={{marginLeft:'1em'}}>
                        <img src={logo} alt="" />
                    </CustomLink>
                    <ul>
                    <CustomLink to="https://ru-ru.facebook.com/" style={{marginLeft:'1em'}}>
                        <img src={facebook} alt="" />
                    </CustomLink>
                    <CustomLink to="https://twitter.com/?lang=en" style={{marginLeft:'1em'}}>
                        <img src={twitter} alt="" />
                    </CustomLink>
                    <CustomLink to="https://www.linkedin.com/" style={{marginLeft:'1em'}}>
                        <img src={linkedin} alt="" />
                    </CustomLink>
                    <CustomLink to="https://www.instagram.com/eidaree" style={{marginLeft:'1em'}}>
                        <img src={instagram} alt="" />
                    </CustomLink>
                    </ul>
                </div>
                <div className='under-links'>
                    <ul>
                    <CustomLink to="/">Main</CustomLink>
                    <CustomLink to="/event">Event</CustomLink>
                    <CustomLink to="/event">Calendar</CustomLink>
                    <CustomLink to="/">Contact Us</CustomLink>
                    <CustomLink to="/about">About project</CustomLink>
                    </ul>
                </div>
               
            </footer>
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

 export default Footbar