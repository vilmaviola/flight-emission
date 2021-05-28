import React, {useState, useEffect} from 'react';
import "../css/Start.css";
import '../css/Styling.css';
import {Link} from 'react-router-dom';
var json = require('../airports.json'); 

function Start() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [matches_from, setMatchesFrom] = useState([]);
  const [matches_to, setMatchesTo] = useState([]);
  const [suggestionsFromVisible, setFromVisible] = useState(true);
  const [suggestionsToVisible, setToVisible] = useState(true);

  function onCheckboxChange() {
    if (roundTrip === 'true') {
      console.log("It was checked, now unchecking");
      setRoundTrip(false);
    } else {
      console.log("It was unchecked, now checked");
      setRoundTrip(true);
    }
  }

  const searchFrom_testing = async searchText => {
    setFrom(searchText);
    let matches = Object.values(json).filter(airport => {
      const regex = new RegExp(`^${searchText.toUpperCase()}`, 'g');
      return airport.airport_name.match(regex) || airport.city.match(regex);
    });

    if (searchText.length == 0) {
      matches = [];
    }
    setMatchesFrom(matches);
  }

  const showsearchFromResult_testing = matches => {
    if (matches.length > 0) {
      const suggestions = matches.map( (match) => 
        <li onClick={() => {setFromVisible(false); setFrom(match.airport_name);}}>
            {match.airport_name} ({match.city})
        </li>
      );
      return (
        <div>
          {suggestionsFromVisible === true &&
          suggestions.map (i =>(
            <div key={i}>
                {i}
            </div>
          ))
          }
        </div>
      );
    } else {
      return (
        <div>{''}</div>
      );
    }
  }

  const searchTo_testing = async searchText => {
    setDestination(searchText);
    let matches = Object.values(json).filter(airport => {
      const regex = new RegExp(`^${searchText.toUpperCase()}`, 'g');
      return airport.airport_name.match(regex) || airport.city.match(regex);
    });

    if (searchText.length == 0) {
      matches = [];
    }
    setMatchesTo(matches);
  }

  const showsearchToResult_testing = matches => {
    if (matches.length > 0) {
      const suggestions = matches.map( (match) => 
        <li onClick={() => {setToVisible(false); setDestination(match.airport_name);}}>
            {match.airport_name} ({match.city})
        </li>
      );
      return (
        <div>
          {suggestionsToVisible === true &&
          suggestions.map (i =>(
            <div key={i}>
                {i}
            </div>
          ))
          }
        </div>
      );
    } else {
      return (
        <div>{''}</div>
      );
    }
  }


  return (
    <div className="start">
        <p className="intro-title ">Calculate carbon emissions for air trip:</p>

        <div className="wrapper">
            <div className="search-input">
              From: <input id="fromInput" type="text" placeholder="Enter city or airport..." autocomplete="off" required={true} value={from} onChange={(e) => {searchFrom_testing(e.target.value)}}/>
              <div className="autocom-box">
                {showsearchFromResult_testing(matches_from)}
              </div>
            </div>

            <div className="search-input">
              To: <input id="toInput" type="text" placeholder="Enter city or airport..." autocomplete="off" required={true} value={destination} onChange={(e) => {searchTo_testing(e.target.value)}}/>
              <div className="autocom-box">
                {showsearchToResult_testing(matches_to)}
                </div>
            </div>

            <div className="data-input-fields" id="roundtrip-checkbox">
              Roundtrip: <input type="checkbox" onChange={(e) => {onCheckboxChange()}}/>
            </div>

        </div>

        <Link to={`/${from}/${destination}/${roundTrip}`}>
            <button className="btn" id="calculate">Calculate</button>
        </Link>
    </div>
  );
}

export default Start;