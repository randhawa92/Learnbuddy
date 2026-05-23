import Navbar from "../components/Navbar";
import LanguageCard from "../components/LanguageCard";

import "../styles/home.css";

import { useNavigate } from "react-router-dom";

import {

  FaInstagram,

  FaFacebook,

  FaLinkedin

} from "react-icons/fa";

function Home() {

  const navigate = useNavigate();

  // Actual values for routing

  const languages = [

    "c",

    "cpp",

    "python",

    "java"

  ];

  // Display names

  const languageNames = {

    c: "C",

    cpp: "C++",

    python: "Python",

    java: "Java"

  };

  const startQuiz = (language) => {

    navigate(`/quiz/${language}`);

  };

  return (

    <div>

      <Navbar />

      <div className="home-container">

        {/* ================= HERO SECTION ================= */}

        <div className="hero-section">

          <h1>

            Upgrade Your Programming Skills 🚀

          </h1>

          <p>

            Practice MCQs in C, C++, Python & Java

          </p>

        </div>

        {/* ================= LANGUAGE CARDS ================= */}

        <div className="language-grid">

          {

            languages.map((lang,index)=>(

              <LanguageCard

                key={index}

                language={languageNames[lang]}

                onClick={()=>startQuiz(lang)}

              />

            ))

          }

        </div>

        {/* ================= ABOUT SECTION ================= */}

        <div

          className="about-section"

          id="about"

        >

          <h2>

            About LearnBuddy

          </h2>

          <p>

            LearnBuddy is an interactive programming
            quiz platform built using React.js.
            It helps users improve their coding
            knowledge through MCQ-based quizzes,
            real-time score tracking, timer-based
            challenges, and progress monitoring.
            Users can practice multiple programming
            languages including C, C++, Python,
            and Java through an engaging and
            user-friendly interface.
            The platform also features dark mode,
            smooth animations, protected routes,
            responsive design, and persistent login
           functionality to deliver a modern
           learning experience.

         </p>

        </div>

        {/* ================= FOOTER ================= */}

        <footer

          className="footer"

          id="footer"

        >

          <h3>

            Connect With Us

          </h3>

          <div className="social-links">

            <a

              href="https://www.instagram.com/__being__jay__/"

              target="_blank"

              rel="noreferrer"

            >

              <FaInstagram />

            </a>

            <a

              href="https://www.facebook.com/akhilesh.challa.79"

              target="_blank"

              rel="noreferrer"

            >

              <FaFacebook />

            </a>

            <a

              href="https://www.linkedin.com/in/digvijay-rout-ba4931211/"

              target="_blank"

              rel="noreferrer"

            >

              <FaLinkedin />

            </a>

          </div>

          <p className="copyright">

            © 2026 LearnBuddy | Made with ❤️ by Digvijay

          </p>

        </footer>

      </div>

    </div>

  );
}

export default Home;