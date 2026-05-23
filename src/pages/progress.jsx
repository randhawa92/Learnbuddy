import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";

import "../styles/home.css";

function Progress() {

  const history =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

  return (

    <div>

      <Navbar />

      <div className="home-container">

        <div className="hero-section">

          <h1>
            Your Progress Report 📊
          </h1>

          <p>
            Track your quiz performance
          </p>

        </div>

        <div className="progress-grid">

          {
            history.length > 0 ? (

              history.map((item,index)=>(

                <ProgressCard

                  key={index}

                  language={item.language}

                  score={item.score}

                  percentage={item.percentage}

                />

              ))

            ) : (

              <p>No quiz attempts yet.</p>

            )
          }

        </div>

      </div>

    </div>

  );
}

export default Progress;