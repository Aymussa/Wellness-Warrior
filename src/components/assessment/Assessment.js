import React, { useState } from "react";
import "./assessment.css";

// React useState components for questions.
const Assessment = () => {
  const [selections, setSelections] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [advice, setAdvice] = useState("");

  // Questions
  const questions = [
    {
      question: "Q1: Are you feeling unwell overall?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q2: Have you been experiencing any changes in your mood or behavior recently?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q3: Have you been feeling particularly stressed or anxious lately?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q4: Are you having any trouble sleeping or experiencing changes in your sleep patterns?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question: "Q5: Have you been feeling tired or fatigued lately?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question: "Q6: Have you noticed any changes in your appetite or weight?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q7: Have you been experiencing any physical symptoms that might be related to your mental health, such as headaches or stomach aches?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q8: Have you been feeling particularly stressed or anxious lately?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q9: Have you been experiencing any difficulties with relationships or interpersonal communication?",
      choices: ["Yes", "Maybe", "Unsure", "No"],
    },
    {
      question:
        "Q10:  Have you been using any substances to cope with your emotions or mental health?",
      choices: ["No", "Yes"],
    },
  ];

  // Check checkbox is user ticked the box
  const handleCheckbox = (event) => {
    const question = event.target.name;
    const choice = event.target.value;
    // Update selection of choice
    setSelections((prevSelections) => ({
      ...prevSelections,
      [question]: choice,
    }));
  };

  // Hnadle submit for when user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Score variable to increment the choice selection
    let score = 0;

    //  Object.values function to iterates over each value in the selections state by the choices
    // a user makes and increment it by a number of times.
    //
    Object.values(selections).forEach((choice, i) => {
      console.log(choice);
      if (choice === "No") {
        score += 1;
      } else if (choice === "Unsure") {
        score += 2;
      } else if (choice === "Maybe") {
        score += 3;
      } else if (choice === "Yes") {
        score += 4;
      }
    });
    // Update the totalScore state based on the choices a user makes.
    setTotalScore(score);

    // Advice card to return advice content depending on the score from the questions user selects
    const adviceCard =
      [
        {
          score: 10,
          // 'Advice for total score of 10'
          text: "Please try out our Pilate, meditation, Mindfulness Exercise, heathly eating and Yoga classes to help maintain a healthy life style",
        },
        {
          // 'Advice for total score of 30'
          score: 30,

          text: "I recommend our Pilate, meditation, Mindfulness Exercise, healthy advice and Yoga classes to help maintain your wellbeing. With regular Heartfulness Meditation, your mind will become centered and shift to deeper levels of feeling, intuition and consciousness.",
        },
        {
          // Advice for total score of 50
          score: 50,
          text: " Please ensure you seek advice from your GP or the Mental Health service. Ensure you call 999 if you feel suicidal or illusional",
        },
        // Check if the result of find() is null or undefined and then return an empty string
      ].find((advice) => score <= advice.score)?.text ?? "";

    setAdvice(adviceCard);
    console.log(adviceCard);
    console.log(totalScore);
  };

  // renders a form with a list of questions and checkboxes for each question
  return (
    <div className="assessment-pg">
      <div className="pt-8 pl-14">
        <h1 className="assessH1 mb-1">Assessment</h1>
        <p className="mb-4 italic">
          Take a brief evaluation to determine how we can offer personalized
          guidance for your mental wellness.
        </p>
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.question}>
              <h3 className="font-semibold text-[19px]">{question.question}</h3>
              {question.choices.map((choice) => (
                <div key={choice}>
                  <label>
                    <input
                      type="checkbox"
                      name={question.question}
                      value={choice}
                      checked={selections[question.question] === choice}
                      onChange={handleCheckbox}
                    />
                    {choice}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            className="bnt2 font-semibold text-[19px] text-black mb-8 mt-4"
            type="submit">
            Submit
          </button>
        </form>
        {/* If totalScore is greater than 0, then return the number of score and advice */}
        {totalScore > 0 && (
          <div>
            <p className="font-semibold">Total score: {totalScore}</p>
            <p className="mb-12 font-semibold text-red-500">{advice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
