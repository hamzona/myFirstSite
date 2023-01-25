import { useState, useRef, useEffect } from "react";
import "./slide.css";
function Answers({
  setSlideKey,
  slide,
  index,
  hendleAnswer,
  setSelectedQuset,
  selectedAnsw,
  setSelectedAnsw,
  setIsChange,
  answerKey,
  answer,
  slides,
  setSlides,
  slideKey,
  setAnswerKey,
}) {
  /*stil*/
  const TrueFalseSyle = {
    backgroundColor: answer.correct ? "rgb(20, 148, 20)" : "rgb(187, 20, 20)",
  };
  const [hideStyle, setHideStyle] = useState(false);
  // const [answerKeyPrev, setAnswerKeyPrev] = useState(answerKey);
  const ansRef = useRef("");
  //let inputs = document.querySelectorAll(".inpAnswer");

  useEffect(() => {
    if (answerKey !== answer.key) {
      setHideStyle(false);
    }
  }, [answerKey, slideKey]);

  useEffect(() => {
    ansRef.current.focus();
  }, [hideStyle]);

  /*function addAnswerReset() {
    inputs.forEach(input=>)
    return copySlides;
  }*/

  let copySlides = slides;
  function addAnswer() {
    copySlides.forEach((slide) => {
      if (slide.key === slideKey) {
        slide.answers.forEach((answer) => {
          if (answer.key === answerKey && ansRef.current.value !== "") {
            answer.content = ansRef.current.value;
          }
        });
      }
    });
    return copySlides;
  }

  /****************************************/
  return (
    <div
      className="answer-cont"
      onClick={() => {
        setAnswerKey(answer.key);
      }}
    >
      <div className="answer-input-cont">
        <form>
          <input
            className="inpAnswer"
            // id={answer.key}
            ref={ansRef}
            type="text"
            style={{ display: hideStyle ? "block" : "none" }}
            key={answer.key}
          />

          <div
            className="answer"
            style={{ display: hideStyle ? "none" : "block" }}
          >
            {answer.content}
          </div>

          <button
            className="answerBtn"
            onClick={(e) => {
              e.preventDefault();
              //setSlides([...addAnswer()]);
              //setAnswerKey(answer.key);
              setSlideKey(slide.key);
              if (hideStyle) {
                setSlides([...addAnswer()]);
              }
              setHideStyle((prev) => !prev);
            }}
          >
            {hideStyle ? "submit" : "change"}
          </button>
        </form>
      </div>
      <div className="answer-footer">
        <div
          className="CorrectIncorrect"
          onClick={() => {
            setIsChange((prev) => !prev);
          }}
          style={TrueFalseSyle}
        >
          {answer.correct ? "✓" : "x"}
        </div>
      </div>
    </div>
  );
}

export default Answers;
