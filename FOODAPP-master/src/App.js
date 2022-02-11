//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Explore from './components/Explore';
import Buy from './components/Buy';
import Foods from './components/Foods';
import Navvy from './Navbar';
import {useState} from 'react';

import Login1 from "./components/Login1.js"
//import Register from "./components/register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
          <Navvy/>
     <Route exact path="/Foods" component={Foods}/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/About" component={About}/>
     <Route exact path="/Explore" component={Explore}/>
     <Route exact path="/Buy" component={Buy}/>

 
      
      <Route path="/Login"><Login1/></Route>

      </Router>

    </div>
  );
}

export default App;














