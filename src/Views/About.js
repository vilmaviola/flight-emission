import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/Styling.css';

function About() {

  return (
    <div className="start">
        <h1>About</h1>
          <div className="about">
            <p>The project is done by Vilma Ahlholm together with and for a team of researchers at the Royal Institute of Technology (KTH) 
              that is managing a project called FLIGHT.</p>
            <p>The aim of the project was to develop a tool with information about the carbon emissions from flights that is displayed 
              in a way that gives both knowledge and emotional reactions.</p>

            <p>The aspiration is that the content on this website starts a reflection process about the impact and damage flying has on the climate.</p> 

          </div>

    </div>
  );
}

export default About;