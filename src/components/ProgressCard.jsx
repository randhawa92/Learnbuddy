function ProgressCard({

  language,

  score,

  percentage

}) {

  return (

    <div className="progress-card">

      <h3>
        {language}
      </h3>

      <p>
        Score: {score}
      </p>

      <p>
        Percentage: {percentage}%
      </p>

    </div>

  );
}

export default ProgressCard;