import CurrentAnswersData from "./CurrentAnswersData.js";
import { useEffect, useState } from "react";
import "./presentSlide.css";
function CurrentSlide({
  setCorrect,
  currentSlideData,
  setI,
  i,
  setCurrentSlideData,
  slides,
}) {
  /*pokazivanje odgovora*/
  const [clicked, setClicked] = useState(true);
  const [correctCheck, setCorrectChek] = useState(true);

  const hideButton = {
    display: clicked ? "block" : "none",
  };
  const correctStyle = {
    backgroundColor: "green",
  };
  useEffect(() => {
    setClicked(false);
  }, []);

  return (
    <div
      className="pres-table"
      style={{
        backgroundColor: clicked ? (correctCheck ? "#00910e" : "#ce0000") : "",
      }}
    >
      <div className="top-cont">
        <p className="pres-number">{i + 1}</p>
        <h2 className="pres-quesiton">{currentSlideData.question}</h2>
      </div>

      <div className="pres-answers">
        {currentSlideData.answers.map((answer) => {
          return (
            <CurrentAnswersData
              setCorrectChek={setCorrectChek}
              setCorrect={setCorrect}
              clicked={clicked}
              setClicked={setClicked}
              key={answer.key}
              answer={answer}
            />
          );
        })}
      </div>
      <div className="footer-cont">
        <div style={hideButton}>
          <p className="correct-wrong">{correctCheck ? "CORRECT" : "WRONG"}</p>
          <button
            className="pres-next"
            onClick={() => {
              setI((prev) => {
                return ++prev;
              });
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentSlide;
