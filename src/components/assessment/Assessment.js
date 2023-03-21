
import React, { useState } from 'react';

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

 




}