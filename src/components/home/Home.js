import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div className="home pt-24">
      <div className="container mx-auto h-full relative pt-24">
        
          <h1 className="h1-home lg:text-[85px] text-white">
            <span className="h1-span">Wellness</span> <br /> Warrior
          </h1>
            <p className="p-home  text-white mb-4">
              We're here to help you improve your physical fitness, manage
              stress and anxiety, or find peace and tranquility in your everyday
              life.
            </p>
            <p className="p-home1  text-white mb-4"> Let's see how we can help you by taking our assessment:
        </p>
        <Link to="/services" className="btn-1">
      Assessment
    </Link>
        </div>
      </div>
  
  );
}

export default Home;
