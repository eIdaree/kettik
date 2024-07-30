import Navbar from './layouts/Navbar'
import Footbar from './layouts/Footbar'

import {Route,Routes} from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Event from "./pages/Event"
import Catalog from './pages/Catalog'
import CardDetail from './components/ui/CardDetail';
import Registration from './components/form/Registration'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/event' element ={<Event/>}></Route>
          <Route path='/about' element ={<About/>}></Route>
          <Route path='/profile' element ={<Profile/>}></Route>
          <Route path='/catalog' element = {<Catalog/>}></Route>
          <Route path="/card/:id" element={<CardDetail/>} />
          <Route path='*' element ={<h1>Not found</h1>}></Route>
          <Route path='/registration' element ={<Registration/>}></Route>
        </Routes>
      </div>
      <Footbar/>
    </>
  )
}

export default App
