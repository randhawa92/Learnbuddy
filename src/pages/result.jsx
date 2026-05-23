import { useNavigate } from "react-router-dom";
import "../styles/result.css";
import { motion } from "framer-motion";

function Result() {

  const navigate = useNavigate();

  const latestResult =
    JSON.parse(localStorage.getItem("latestResult"));

  const score = latestResult.score;

  const percentage = latestResult.percentage;

  const language = latestResult.language;

  const totalQuestions = 30;

  const wrongAnswers = totalQuestions - score;

  return (

    <div className="result-container">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="result-box"
      >

        <h1>Quiz Completed 🎉</h1>

        <h2>Language: {language}</h2>

        <h2>Correct Answers: {score}</h2>

        <h2>Wrong Answers: {wrongAnswers}</h2>

        <h2>Percentage: {percentage}%</h2>

        <button onClick={() => navigate("/home")}>

          Go Home

        </button>

      </motion.div>

    </div>
  );
}

export default Result;