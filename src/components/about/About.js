import React from "react";
// import ReactDOM from 'react-dom';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css"
let man1 = "/images/man1.jpg";
let lady1 = "/images/lady1.jpg";
let lady2 = "/images/lady2.jpg";
let lady3 = "/images/lady3.jpg";

function About() {
  return (
    <div className="About pt-24">
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
 

      <h2 className="h2-about pt-24">Meet the Team</h2>
      <br></br>

      {/* meet the team section */}

      <div className="grid grid-cols-4 gap-4">
        <div className="border border-gray-500 p-4 Ahmed"> Ahmed
          <br></br>

          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + man1}
            alt="man"
            width={"60%"}
            className="ManImage"
          />
          <p> Meditation expert consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="border border-gray-500 p-4 Jessie"> Jessie
          <br></br>
          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + lady1}
            alt="lady1"
            width={"60%"}
            className="MyLady1"
          />
          <p> Yoga World guru, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="border border-gray-500 p-4 Laly"> Laly
          <br></br>
        <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + lady2}
            alt="lady2"
            width={"60%"}
            className="MyLady2"
          />
          <p> Palate World Expert  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="border border-gray-500 p-4 Abby">Abby
          <br></br>
          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + lady3}
            alt="lady3"
            width={"60%"}
            className="MyLady3"
          />
          <p> Well being Specialist sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
      </div>
    </div>

  );
}

export default About;
