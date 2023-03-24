import React from "react";
import "./services.css";
import PlaceApi from "../PlaceApi";
import testimonialsImage1 from "../images/testimonial-1.jpg";
import testimonialsImage2 from "../images/testimonial-2.jpg";
import testimonialsImage3 from "../images/testimonial-3.jpg";
import testimonialsImage4 from "../images/testimonial-4.jpg";

function Services() {
  return (
    <div>
      <h1 className="h1-services">Welcome to our Services</h1>
      <p className="p-services mb-6">
        Wellness Warrior is designed to provide you with a variety of services
        to help you improve your overall health and well-being. Our services
        include:
      </p>
      <div ClassName="ul-services">
        <ul className="pl-8 pr-8">
          <li className="mb-3 mt-3">
            <span className="font-semibold text-teal-600">
              Lifestyle coaching:
            </span>{" "}
            Our lifestyle coaches provide guidance and support to help you make
            positive changes in your daily routine, including improving sleep
            habits, managing stress, and establishing healthy routines.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-teal-600">
              Health diet planning:
            </span>{" "}
            Our nutritionists will work with you to create a customised meal
            plan based on your goals and preferences. We also offer a recipe
            library with healthy and delicious options.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-teal-600">
              Exercise and yoga:
            </span>{" "}
            Our app offers a range of exercise and yoga routines, from gentle
            stretching to high-intensity workouts. Instructors provide
            step-by-step guidance to help you get the most out of your practice.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-teal-600">
              Breathing techniques:
            </span>{" "}
            Our app features a variety of breathing exercises to help you reduce
            stress and improve focus. Instructors will guide you through
            different techniques such as deep breathing and alternate nostril
            breathing.
          </li>
          <li className="mb-3">
            <span className="font-semibold text-teal-600">Meditation:</span> Our
            meditation sessions are designed to help you relax and reduce
            stress. We offer guided meditations for beginners, as well as more
            advanced options for those with more experience.
          </li>
        </ul>
        <p className="p-services font-bold text-center mb-12">
          {" "}
          We are constantly adding new services and features to our site, so be
          sure to check back often!
        </p>
      </div>
      <section className="bg-services"></section>
      <h1 className="formH1 font-semibold text-[25px] text-center pt-8">
        Find a place to workout!
      </h1>
      <p className="finder-p text-center pt-2 mb-4">
        To improve your physical health, utilize the form below to explore
        various types of fitness options nearby your chosen location.
      </p>
      <section className="pt-6 pl-7">
        <PlaceApi></PlaceApi>
      </section>

      <h2 className="p-services font-semibold text-[25px] text-center">
        Testimonials:
      </h2>
      <div className="testimonials">
        <ul>
          <li>
            <img
              src={process.env.PUBLIC_URL + testimonialsImage1}
              alt="testimonials1"></img>
            <p>
              "Recommended for those seeking to improve mental wellness,
              mindfulness, and lifestyle. As someone who sits at a desk a lot, I
              struggled with back pain and poor posture. Since using Wellness
              Warrior, my posture and comfort have greatly improved"
            </p>
            <h1>Michelangelo di Lodovico</h1>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + testimonialsImage2}
              alt="testimonials2"></img>
            <p>
              "Using the Wellness Warrior App improved my mental health
              significantly. Its guided meditations, mindfulness exercises, and
              daily journal prompts helped me manage anxiety and identify
              patterns in my thoughts and behaviors.. Overall, this app has been
              a lifesaver for me."
            </p>
            <h1>Michael Jordan</h1>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + testimonialsImage3}
              alt="testimonials3"></img>
            <p>
              "I have been using the Wellness Warrior App for the past few weeks
              and I have noticed a significant improvement in my overall health
              and wellbeing. The app is easy to use and the features are very
              helpful. I would highly recommend this app to anyone looking to
              improve their wellbeing."
            </p>
            <h1>Lara Croft</h1>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + testimonialsImage4}
              alt="testimonials4"></img>
            <p>
              "i use the Wellness Warrior app for improving my diet and
              lifestyle. The meal planner and daily reminders have helped me
              stay on track with healthy eating and exercise. While it could use
              more variety in recipes, it's still a valuable tool for making
              healthier choices"
            </p>
            <h1>Anne Robinson</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
