
import React, { useState } from 'react';
import "./assessment.css"

// React useState components for questions.
const Assessment = () => {
  const [selections, setSelections] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [advice, setAdvice] = useState('');

  // Questions
  const questions = [
    {
      question: 'Q1: How are you feeling overall?',
      choices: ["I'm feeling okay", "I'm not doing so well", "I'm feeling a bit stressed/tired/anxious"]
    },
    {
      question: 'Q2: Have you been experiencing any changes in your mood or behavior recently?',
      choices: ["I dont know", 'Maybe', 'Yes', 'No']
    },
    {
      question: 'Q3: Have you been feeling particularly stressed or anxious lately?',
      choices: ['Sometimes', 'No', 'Yes']
    },
    {
      question: 'Q4: Are you having any trouble sleeping or experiencing changes in your sleep patterns?',
      choices: ['Sometimes', 'No', 'Yes']
    },
    {
      question: 'Q5: Have you been feeling tired or fatigued lately?',
      choices: ['Sometimes', 'No', 'Yes']
    },
    {
      question: 'Q6: Have you noticed any changes in your appetite or weight?',
      choices: ['I dont know', 'No', 'Yes']
    },
    {
      question: 'Q7: Have you been experiencing any physical symptoms that might be related to your mental health, such as headaches or stomach aches?',
      choices: ['Not Sure', 'No', 'Yes']
    },
    {
      question: 'Q8: Have you been feeling particularly stressed or anxious lately?',
      choices: ['Sometimes', 'No', 'Yes']
    },
    {
      question: 'Q9: Have you been experiencing any difficulties with relationships or interpersonal communication?',
      choices: ['Not Sure', 'No', 'Yes']
    },
    {
      question: 'Q10:  Have you been using any substances to cope with your emotions or mental health?',
      choices: ['No', 'Yes']
    }
   
  ];

// Check checkbox is user ticked the box
  const handleCheckbox = (event) => {
    const question = event.target.name;
    const choice = event.target.value;
// Update selection of choice
    setSelections((prevSelections) => ({
      ...prevSelections,
      [question]: choice
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
    if (choice === questions[i].choices.indexOf(choice)) {
      score += 1;
    } else if (choice === "No") {
      score += 2;
    } else if (choice === "Maybe") {
      score += 3;
    } else if (choice === "I dont know") {
      score += 4;
    }
  });
// Update the totalScore state based on the choices a user makes.
  setTotalScore(score);

// Advice card to return advice content depending on the score from the questions user selects
const adviceCard = [
  {
    score: 10,
    text: 'Advice for total score of 10'
  },
  {
    score: 30,
    text: 'Advice for total score of 30'
  },
  {
    score: 50,
    text: 'Advice for total score of 50'
  }
  // Check if the result of find() is null or undefined and then return an empty string
].find((advice) => score <= advice.score)?.text ?? '';

setAdvice(adviceCard);
console.log(adviceCard)
console.log(totalScore)

};


// renders a form with a list of questions and checkboxes for each question
return (
  <div className='assessment-pg h-full pt-30'>
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.question}>
          <h3>{question.question}</h3>
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
      <button type="submit">Submit</button>
    </form>
    {/* If totalScore is greater than 0, then return the number of score and advice */}
    {totalScore > 0 && (
      <div>
        <p>Total score: {totalScore}</p>
        <p>{advice}</p>
      </div>
    )}
  </div>
);
};

export default Assessment;