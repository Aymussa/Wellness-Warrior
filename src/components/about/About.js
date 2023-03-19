import React from "react";
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'


function About() {
  return (
    <div className="pt-24">
      <h1>About Page</h1>
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
        <li>Journaling: The app can provide a digital journal for users to write about their feelings and experiences, helping them process emotions and identify negative thought patterns.
        </li>
        <br></br>
        <li>Virtual therapy: The app can provide access to virtual therapy or counseling sessions, allowing users to get professional mental health support from the comfort of their own home.
        </li>
        <br></br>
        <li>Self-help resources: The app can provide articles, videos, and other resources on mental health topics, such as coping skills, stress management and self-care.
        </li>
        <br></br>
        <li>
          Support groups: The app can connect users with support groups or communities of people who are dealing with similar mental health challenges.
        </li>

      </ul>
      <br></br>
      <p> Meet the Team </p>
      <br></br>
      {/* <div class="grid grid-cols-4 divide-x"> */}
      <div class="grid grid-cols-4 gap-4">
        <div class="border border-gray-500 p-4">
          <div title = "Ahmed"></div>
          <p>Bootcamp Project 2023</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
      </div>

        <div class="border border-gray-500 p-4">
          <div title Jessica> </div>
            <p>Bootcamp Project 2023</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="border border-gray-500 p-4">
          Laly <p>Bootcamp Project 2023</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="border border-gray-500 p-4">
          Abby<p>Bootcamp Project 2023</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
        </div> 
      {/* </div> */}
    </div>




  );
}

export default About;
