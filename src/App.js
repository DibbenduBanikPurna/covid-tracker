import React from 'react';
import './App.css';
import CovidTracker from './Components/CovidTracker/CovidTracker';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import HomePage from './Components/HomePage/HomePage';
import SearchCountry from './Components/SearchCountry/SearchCountry';
import Navbar from './Components/Navbar/Navbar';
function App() {
  
  

  return (
    <>
    
      
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" >
            <HomePage/>
          </Route>
           
           <Route path="/covid"><CovidTracker/></Route>
           <Route path="/search"> <SearchCountry/> </Route>
        </Switch>
      </Router>
   
    

      
   
    
  
    </>
   
  );
}

export default App;
