import { Link,useMatch, useResolvedPath } from 'react-router-dom'
import MultiFilter from '../features/projects/MultiFilter'
import Sidebar from '../layouts/Sidebar'
import Footbar from '../layouts/Footbar'

import card_person from '../assets/card_person.svg'

import '../assets/style/Home.css'
import '../assets/style/index.css'

const Home = () =>{
  return(
   <>
      <div className="intro_page">
        <div className='half-intro'>
          <p>Events not to be missed: the calendar of events of our city</p>
          <Link to='/catalog'>
            <button>Kettik!</button>  
          </Link>
        </div>
        <img src={card_person} alt="" />
      </div>
      <div className='container-dic'>
        <MultiFilter statement = "false"/>
        <Sidebar/>
      </div>
   </>
  )
}
export default Home;


