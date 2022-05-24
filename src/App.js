import React from 'react'
import Navbar from './Navbar'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
// import Home from './Home'

function App() {
  return (
    
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Student' element={<Student/>}/>

  </Routes>

</BrowserRouter>
      
    
  )
}

export default App