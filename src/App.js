import './css/App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Start from './Views/Start.js';
import Comparison1 from './Views/Comparison1';
import Comparison2 from './Views/Comparison2';
import Comparison3 from './Views/Comparison3';
import Summary from './Views/Summary';
import Information from './Views/Information';
import ScrollToTop from './Components/ScrollToTop';
import About from './Views/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Link to={"/flight-emission/" } style={{ textDecoration: 'none'}}>
              <p className="header-btn">Calculate new trip</p>
            </Link>

            <h2 id="title">Flight Emission Calculator and Comparator</h2>

            <div className="header-div">
              <Link to={"/flight-emission/info"} style={{ textDecoration: 'none'}} className="more-info">
                  <p className="header-btn">More Information</p>
              </Link> 

              <Link to={"/flight-emission/about"} style={{ textDecoration: 'none'}} className="more-info">
                  <p className="header-btn">About</p>
              </Link> 
            </div>

        </header>

        {/* <Fragment> */}
          <ScrollToTop />
          <Switch>
            <Route path="/flight-emission/" exact component={Start}/>
            <Route path="/flight-emission/:from/:destination/:roundTrip" exact component={Comparison1}/>
            <Route path="/flight-emission/:from/:destination/:roundTrip/:emissions/household" exact component={Comparison2}/>
            <Route path="/flight-emission/:from/:destination/:roundTrip/:emissions/plastic-recycle" exact component={Comparison3}/>
            <Route path="/flight-emission/:from/:destination/:roundTrip/:emissions/summary" exact component={Summary}/>
            <Route path="/flight-emission/info" exact component={Information}/>
            <Route path="/flight-emission/about" exact component={About}/>

          </Switch>
        {/* </Fragment> */}


      </div>
    </Router>
  );
}

export default App;
