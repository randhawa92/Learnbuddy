import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import QuizCard from "../components/QuizCard";

import "../styles/quiz.css";

function Quiz() {

  const { language } = useParams();

  const quizQuestions = questions[language];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [time, setTime] = useState(30);

  const navigate = useNavigate();

  // ================= TIMER LOGIC =================

  useEffect(() => {

    if (time > 0) {

      const timer = setTimeout(() => {

        setTime(time - 1);

      }, 1000);

      return () => clearTimeout(timer);

    } else {

      handleAnswer("");

    }

  }, [time]);

  // ================= ANSWER LOGIC =================

  const handleAnswer = (option) => {

    let updatedScore = score;

    if (option === quizQuestions[currentQuestion].answer) {

      updatedScore = score + 1;

      setScore(updatedScore);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizQuestions.length) {

      setCurrentQuestion(nextQuestion);

      setTime(30);

    } else {

      const percentage =
        (updatedScore / quizQuestions.length) * 100;

      const resultData = {

        language,

        score: updatedScore,

        percentage: percentage.toFixed(0)

      };

      localStorage.setItem(
        "latestResult",
        JSON.stringify(resultData)
      );

      const oldResults =
        JSON.parse(localStorage.getItem("quizHistory")) || [];

      oldResults.push(resultData);

      localStorage.setItem(
        "quizHistory",
        JSON.stringify(oldResults)
      );

      navigate("/result");
    }
  };

  return (

    <div className="quiz-container">

      <motion.div
        key={currentQuestion}

        initial={{ opacity: 0, x: 100 }}

        animate={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.5 }}

        className="quiz-box"
      >

        <h3 className="timer">
          ⏰ Time Left: {time}s
        </h3>

        <QuizCard

          question={
            quizQuestions[currentQuestion].question
          }

          options={
            quizQuestions[currentQuestion].options
          }

          handleAnswer={handleAnswer}

        />

        <p>
          Question {currentQuestion + 1} of {quizQuestions.length}
        </p>

      </motion.div>

    </div>
  );
}

export default Quiz;