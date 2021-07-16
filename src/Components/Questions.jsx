import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "../style/Questions.css";

export default function Questions(props) {
  let data = props.data;
  let text = props.categoryTxt;

  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const [counter, setCount] = useState(1);

  const previousData = useRef();
  previousData.current = score;

  let back = useHistory();

  let allAnswers = [];

  //shuffle array
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const quizData = () => {
    //get question
    setQuestions(data[score].question);
    //empty array on every question and fill it again
    allAnswers = [];
    allAnswers.push(data[score].correct_answer);
    data[score].incorrect_answers.map((item) => {
      return allAnswers.push(item);
    });
    //push all answers together
    //shuffle them

    shuffle(allAnswers);
    setAnswers(null);
    setAnswers(allAnswers);
  };

  useEffect(() => {
    if (!data) {
      data = props.data;
    }
    if (data) {
      if (data[score].question !== questions) {
        quizData();
      }

      if (score !== previousData.current) {
        setScore(previousData.score);
      }

      if (props.categoryTxt !== text) {
        text = props.categoryText;
      }
      if (score <= props.length) {
        checkLimit();
      }
    }
  }, [data, score, questions, quizData, text]);

  const checkAnswer = (e) => {
    if (e.target.value === data[score].correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const checkLimit = () => {
    if (counter === props.length) {
      setFinished(true);
    }
  };

  const nextQuestion = (e) => {
    e.preventDefault();
    setCount(counter + 1);
    setScore(score + 1);
    quizData();
  };

  const backToMain = () => {
    back.push("/ReactQuizz");
  };
  return (
    <div className="questions">
      {finished === false ? (
        <form onSubmit={nextQuestion} onClick={checkAnswer}>
          <h1>Quizz</h1>
          <div className="score">
            <p>
              Question: {counter}/{props.length}
            </p>
            <p>Correct Answers: {correctAnswers}</p>
          </div>
          <div className="chosenOptions">
            <div>
              <p>Length:</p>
              <p>{props.length}</p>
            </div>
            <div>
              <p>Difficulty:</p>
              <p>
                {props.difficulty === "" ? "Any Difficulty" : props.difficulty}
              </p>
            </div>
            <div>
              <p>Type:</p>
              <p>{props.type === "" ? "Any Type" : props.type}</p>
            </div>
            <div>
              <p>Category:</p>
              <p>{props.category === "" ? "Any Category" : text}</p>
            </div>
          </div>
          <hr />
          <div className="question">
            <p>{questions}</p>
          </div>
          {!data ? (
            "loading.."
          ) : data[score].type !== "multiple" ? (
            <div className="answers">
              <button onClick={checkAnswer} value={answers[0]}>
                {answers[0]}
              </button>
              <button onClick={checkAnswer} value={answers[1]}>
                {answers[1]}
              </button>
            </div>
          ) : (
            <div className="answers">
              <button onClick={checkAnswer} value={answers[0]}>
                {answers[0]}
              </button>
              <button onClick={checkAnswer} value={answers[1]}>
                {answers[1]}
              </button>
              <button onClick={checkAnswer} value={answers[2]}>
                {answers[2]}
              </button>
              <button onClick={checkAnswer} value={answers[3]}>
                {answers[3]}
              </button>
            </div>
          )}
        </form>
      ) : (
        <div className="finished">
          <h3>
            Congrats your score is {correctAnswers}/{props.length}
          </h3>
          <button onClick={backToMain}>Try Again</button>
        </div>
      )}
    </div>
  );
}
