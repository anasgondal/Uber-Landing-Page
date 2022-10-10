import React from "react";
import Navbar from "./Components/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from "./pages/Signup";
const App = () => {
  return (
    <>
         
  <Router>
  
    <Switch>

      <Route exact path="/">  
             <Home />
        </Route>
        <Route path="/signup">  
             <Signup />
        </Route>
      
    </Switch>
  </Router>
      
    </>
  )
}

export default App;