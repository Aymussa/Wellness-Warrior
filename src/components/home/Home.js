import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import GroupImg1 from "../images/outdoor-yoga.jpeg";
import Doctor from "../images/doctor.jpeg";
import EatingHealthy from "../images/healthy.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="jumbotron"></div>
      <div className="home-content pt-32 container mx-auto absolute inset-8 text-left">
        <h1 className="h1-home text-[85px] text-white">
          Wellness <br /> Warrior
        </h1>
        <p className="p-home  text-white mb-6">
          We're here to help you improve your physical fitness, manage stress
          and anxiety, or find peace and tranquility in your everyday life.
        </p>
        <p className="p-home1  text-white mb-6">
          Let's see how we can help you by taking our assessment:
        </p>

        <Link to="/assessment">
          <button className="btn-1 font-semibold text-[17px]">
            Assessment
          </button>
        </Link>
      </div>

      <section className="blog section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2 className="h2-subtitle">What we do...</h2>
              <p className="font-semibold text-[18px] mb-6">
                We recommend fantastic services to improve your fitness, reduce
                stress, and achieve tranquility in your daily life.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src={GroupImg1} alt="Group Outside Yoga" />
                  <div className="blog-title1">Yoga & Meditation</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Best Yoga Journal</h4>
                  <p className="blog-description">
                    Yoga Journal inspires, educates, and guides anyone
                    practicing yoga. It covers yoga positions (asanas),
                    meditation, breathing methods, lifestyle, health, and more.
                  </p>
                  <p className="blog-tags">
                    Link :{" "}
                    <a href="https://www.yogajournal.com/">Yoga Journal</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div class="blog-img">
                  <img src={EatingHealthy} alt="Group Outside Yoga" />
                  <div className="blog-title1">Healthy Recipes</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    recipes tailored to specific health conditions
                  </h4>
                  <p className="blog-description">
                    EatingWell offers healthy, tasty recipes and cooking ideas.
                    Vegetarian, low-carb, and gluten-free meal plans.
                  </p>
                  <p className="blog-tags">
                    Link :{" "}
                    <a href="https://www.eatingwell.com/"> Eating Well</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src={Doctor} alt="Group Outside Yoga" />
                  <div className="blog-title1">Health & Wellbeing</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">Health Information</h4>
                  <p className="blog-description">
                    Healthline offer expert opinions, medically reviewed
                    articles, and interactive tools such as meal planners,
                    symptom checkers, and exercise guides.
                  </p>
                  <p className="blog-tags">
                    Link : <a href="https://www.healthline.com/">Healthline</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="quote-section">
        <div className="quote-text">
          <h3 class="text-center font-semibold text-[19px]">
            “Wellness encompasses a healthy body, a sound mind, and a tranquil
            spirit.
          </h3>
          <h3 class="text-center font-semibold text-[19px]">
            Enjoy the journey as you strive for wellness.”
          </h3>
          <h3 class="text-center font-semibold text-[18px] text-teal-800">
            - Laurette Gagnon Beaulieu
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
