import React, {useState, useEffect} from 'react';
import "../css/Comparison3.css";
import '../css/Styling.css';
import {Link} from 'react-router-dom';
import infoLogo from '../images/information-logotype.png';
import plastic_recycle from '../images/plastic.png';

function Comparison3({ match }) {
    const recycled_plastic = Math.round((match.params.emissions/1.5) * 100) / 100;
    const number_years = Math.round(recycled_plastic/8);

    function airTripText() {
        if (match.params.roundTrip == "true") {
          return (
            <p>A roundtrip flight between {match.params.from} and {match.params.destination} corresponds to an emission of {match.params.emissions}kg CO2</p>

          );
        }
        else {
          return(
            <p>A one-way flight from {match.params.from} to {match.params.destination} corresponds to an emission of {match.params.emissions} kg CO2. </p>
          );
        }
      }
    

  return (
    <div>
        <h1>Plastic Recycle</h1>
        <p className="part">Emission Comparison 3/3</p>

        <div className="start-subheading">
            {airTripText()}
        </div>

        <div className="info-box--carbon">            
            <div className="tooltip">
                <img src={infoLogo} className="info-logotype" alt="info-logo"/>
                <span className="tooltiptext">
                    <p className="tooltiptext-title">Recycling plastic</p>
                    <p className="tooltiptext-text">For 1 kg of recycled plastics, the saving is 1.5 kg of CO2</p>
                </span>
            </div>

            <p>To reduce the same amount of kilograms CO2 that this trip emits you would have to recycle {recycled_plastic}kg of plastic.</p>
        </div>

            <div className="recycling_bin_container">
                <p>{recycled_plastic} kg plastic</p>
                <img src={plastic_recycle} className="recycling_bin" alt="Plastic recycling bin" />
            </div>

            <div className="info-box--years">            
                <div className="tooltip">
                    <img src={infoLogo} className="info-logotype" alt="info-logo"/>
                    <span className="tooltiptext">
                        <p className="tooltiptext-title">Recycling plastic</p>
                        <p className="tooltiptext-text">In 2019 in Sweden, 81 108 tonnes plastic was recycled. 
                                                        Therefore assuming that one person recycles approx. 8kg plastic per year.</p>
                    </span>
                </div>

                <p>It will take you approx. {number_years} years to recycle {recycled_plastic}kg of plastic.</p>
            </div>

        <div className="next-btn">
            <Link to={`/flight-emission/${match.params.from}/${match.params.destination}/${match.params.roundTrip}/${match.params.emissions}/summary`}>
                <button className="btn">Summary</button>
            </Link>
        </div>

    </div>
  );
}

export default Comparison3;