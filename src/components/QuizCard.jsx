function QuizCard({

  question,

  options,

  handleAnswer

}) {

  return (

    <>

      <h2>
        {question}
      </h2>

      <div className="options">

        {
          options.map((option,index)=>(

            <button
              key={index}

              onClick={() => handleAnswer(option)}
            >

              {option}

            </button>

          ))
        }

      </div>

    </>

  );
}

export default QuizCard;