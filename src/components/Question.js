import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  
  // useEffect(() => {
  //   if (timeRemaining === 0)
  //     {
  //     setTimeRemaining(10)
  //     }
  //     else{
  //     const newNum = timeRemaining - 1
  //     setTimeout(setTimeRemaining(newNum),1000)
  //     }    
  // }, [])

  // add useEffect code

  useEffect( () => {
  const timer = setTimeout( () => {
    if(timeRemaining > 0){
const newNum = timeRemaining - 1
setTimeRemaining(newNum)}else{const newNum = 10
  setTimeRemaining(newNum)
  onAnswered(false)}

  }, 1000)
  return () => clearTimeout(timer);
  }, [timeRemaining]
  )

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
