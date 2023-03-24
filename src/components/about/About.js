import React from "react";
// import ReactDOM from 'react-dom';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";
import man1 from "../images/man1.jpg";
import lady1 from "../images/lady1.jpg";
import lady2 from "../images/lady2.jpg";
import lady3 from "../images/lady3.jpg";

function About() {
  return (
    <div className="About pt-8 pl-6 pr-6">
      <h1 className="h1-about">About Us</h1>
      <p className=" text-black pt-4">
        Wellness Warrior is a well being app that is designed to help users cope
        with stress, anxiety, depression, and other mental health conditions.
        <p>
          The app was established in 2019 and has been very popular among people
          of all ages.
        </p>
      </p>

      <p className="pt-3 font-semibold">The app provides the followings:</p>

      <ul>
        <li className="pt-4">
          Guided meditations and relaxation exercises to help users reduce
          stress and anxiety.
        </li>

        <li className="pt-4">
          <span className="font-semibold">Mindfulness exercises:</span> The app
          can offer mindfulness exercises to help users stay present and focused
          on the present moment.
        </li>
        <li className="pt-4">
          <span className="font-semibold">Virtual therapy:</span> The app can
          provide access to virtual therapy or counseling sessions, allowing
          users to get professional mental health support from the comfort of
          their own home.
        </li>

        <li className="pt-4">
          <span className="font-semibold">Self-help resources:</span> The app
          can provide articles, videos, and other resources on mental health
          topics, such as coping skills, stress management and self-care.
        </li>

        <li className="pt-4">
          <span className="font-semibold">Support groups:</span> The app can
          connect users with support groups or communities of people who are
          dealing with similar mental health challenges.
        </li>
      </ul>

      <h2 className="h2-about pt-14 mb-6">Meet the Team</h2>

      {/* meet the team section */}

      <div className="team-grid grid grid-cols-4 gap-4">
        <div className="border border-gray-500 p-4 Ahmed">
          <h1 className="font-semibold">Ahmed</h1>

          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + man1}
            alt="man"
            className="rounded-circle"
          />
          <p>
            {" "}
            Meditation expert consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="border border-gray-500 p-4 Jessie">
          <h1 className="font-semibold">Jessie</h1>
          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + lady1}
            alt="lady1"
            className="rounded-circle"
          />
          <p>
            {" "}
            Yoga World guru, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="border border-gray-500 p-4 Laly">
          <h1 className="font-semibold">Laly</h1>

          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + lady2}
            alt="lady2"
            className="rounded-circle"
          />
          <p>
            {" "}
            Palate World Expert consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="border border-gray-500 p-4 Abby">
          <h1 className="font-semibold">Abby</h1>

          <p>Bootcamp Project 2023</p>
          <img
            src={process.env.PUBLIC_URL + lady3}
            alt="lady3"
            className="rounded-circle"
          />
          <p>
            {" "}
            Well being Specialist sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
