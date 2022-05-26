
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Home"
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';
import Fitness from './Fitness'
import Sports from './Foods';
import Technology from './Technology';
import Api from './Components/Api';
import './styling.css'
import ApiHolywood from './Components/ApiHolywood';
import ApiTech from './Components/ApiTech';
import ApiFitness from './Components/ApiFitness';
import ApiHome from './Components/ApiHome';
import ApiSports from './Components/Apifoods';
import {Link} from 'react-router-dom'
import Foods from './Foods';
import Apifoods from './Components/Apifoods';
function App() {
  return (
    <Apifoods>
    <ApiHome>
    <ApiFitness>
    <ApiTech>
    <ApiHolywood>
    <Api>
    <div className="App">
      <BrowserRouter>
      <div className='homePage'>
      <div className="logo">
        <div className="the">THE</div>
        <div className="siren">SIREN</div>
      </div> 
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div><Link to="/"><button className='btn btn-outline-success'>Home </button></Link></div>


          <div><Link to={'/hollywood'}><button className='btn btn-outline-success'> Hollywood</button></Link></div>
          <div><Link to={'/cricket'}><button className='btn btn-outline-success'>Food</button></Link></div>
          <div><Link to={'/bollywood'}><button className='btn btn-outline-success'>Bollywood </button></Link></div>
 
          <div><Link to={'/technology'}><button className='btn btn-outline-success'>Technology </button></Link></div>
          <div><Link to={'/fitness'}><button className='btn btn-outline-success'>Fitness </button></Link></div>
        
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path="/cricket" element={<Foods/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Api>
    </ApiHolywood>
    </ApiTech>
    </ApiFitness>
    </ApiHome>
    </Apifoods>
  );
}

export default App;