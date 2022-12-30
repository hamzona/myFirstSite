import { Link } from "react-router-dom";
import { useDataSlides } from "../GlobalContext/DataSlides";
import CurrentSlide from "./CurrentSlide";
import { useEffect, useState } from "react";
import "./presentSlide.css";

function StartQuiz() {
  const [i, setI] = useState(0);
  const slides = useDataSlides();
  const [currentSlideData, setCurrentSlideData] = useState(slides[i]);

  const [correct, setCorrect] = useState(0);
  useEffect(() => {
    setCurrentSlideData(slides[i]);
  }, [i]);
  if (currentSlideData !== undefined) {
    return (
      <>
        <div className="quiz-run-cont">
          <CurrentSlide
            color={slides[0].color}
            setCorrect={setCorrect}
            className="slide-cont"
            slides={slides}
            i={i}
            setI={setI}
            key={currentSlideData.key}
            setCurrentSlideData={setCurrentSlideData}
            currentSlideData={currentSlideData}
          />
        </div>
      </>
    );
  } else {
    return (
      <div className="finish-cont">
        <div className="finish-tabel">
          <h1>Finished game</h1>
          <p className="result">
            {correct}/{slides.length}
          </p>
          <p className="result">
            {((correct / slides.length) * 100).toFixed(2)}%
          </p>
          <button
            className="restart"
            onClick={() => {
              setI(0);
              setCurrentSlideData(slides[0]);
              setCorrect(0);
            }}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default StartQuiz;
