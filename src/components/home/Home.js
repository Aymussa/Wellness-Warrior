import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home pt-24">
      <div className="container mx-auto h-full relative pt-24">
        <div className="flex flex-col justify-center">
          <h1 className="h1-home lg:text-[85px] text-white">
            <span className="h1-span">Wellness</span> <br /> Warrior
          </h1>
            <p class=" p-home  text-white  mb-4">
              Welcome to our wellness website, where we strive to help you
              achieve a balanced and fulfilling life.
            </p>
            <p class="p-home  text-white mb-4">
              We're here to help you improve your physical fitness, manage
              stress and anxiety, or find peace and tranquility in your everyday
              life.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
