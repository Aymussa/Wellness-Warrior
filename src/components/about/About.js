import React, { Component } from "react";
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css"
// import logo from "../images/logo.jpg.";

function About() {
  return (
    <div className= "About pt-24">
      <h1 className="h1-about pt-24">About Us</h1>
      <p>
        Wellness Warrior is a well being app that is designed to help users cope with stress, anxiety, depression, and other mental health conditions.
        <p>The app was established in 2019 and has been very popular among people of all ages.</p>
      </p> <br></br>

      <p>
        The app provides the followings:
      </p> <br></br>

      <ul>
        <li>Guided meditations and relaxation exercises to help users reduce stress and anxiety.
        </li> <br></br>

        <li>Mindfulness exercises: The app can offer mindfulness exercises to help users stay present and focused on the present moment.
        </li>
        <br></br>
        <li>Journaling: The app can provide a digital journal for users to write about their feelings and experiences, helping them process emotions and identify negative thought patterns.</li>
        <br></br>
        <li>Virtual therapy: The app can provide access to virtual therapy or counseling sessions, allowing users to get professional mental health support from the comfort of their own home.
        </li>
        <br></br>
        <li>Self-help resources: The app can provide articles, videos, and other resources on mental health topics, such as coping skills, stress management and self-care.</li>
        <br></br>
        <li>
          Support groups: The app can connect users with support groups or communities of people who are dealing with similar mental health challenges.</li>
      </ul>
      <br></br>

      <h2 className="h2-about pt-24">Meet the Team</h2>
      <br></br>
    
    {/* meet the team section */}

      <div class="grid grid-cols-4 gap-4">
      <div class="border border-gray-500 p-4" title = "Ahmed"> Ahmed
      <br></br>
           {/* <img src= {mylogo} alt="Ahmed photo" width="600" height="400"></img> */}
          <p>Bootcamp Project 2023</p>
          <p> Meditation expert consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

        <div class="border border-gray-500 p-4" title = "Jessica"> Jessica
        <br></br>
            <p>Bootcamp Project 2023</p>
            <p> Yoga World guru, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="border border-gray-500 p-4" title = "Laly"> 
        <br></br>
          Laly <p>Bootcamp Project 2023</p>
          <p> Palate World Expert , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="border border-gray-500 p-4" title = "Abby">
        <br></br> 
          Abby<p>Bootcamp Project 2023</p>
          <p> Well being Specialist sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
        </div> 
    </div>

  );
}

export default About;
