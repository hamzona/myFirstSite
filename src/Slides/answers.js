import { useState, useRef } from "react";
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

  const ansRef = useRef("");

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

  function hendlingElements() {
    setHideStyle((prev) => !prev);
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
        <input
          className="inpAnswer"
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
          onClick={() => {
            setSlideKey(slide.key);
            if (hideStyle) {
              setSlides([...addAnswer()]);
            }
            hendlingElements();
            //setAnswerKey(answer.key);
          }}
        >
          {hideStyle ? "submit" : "change"}
        </button>
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
