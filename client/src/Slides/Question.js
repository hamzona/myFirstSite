import "./slide.css";
import { useState, useRef, useEffect } from "react";

export default function Question({
  slides,
  setSlides,
  setSlideKey,
  slideKey,
  setSelectedAnsw,
  setSelectedQuset,
  selectedQues,
  selected,
  number,
  slide,
}) {
  const [hideStyle, setHideStyle] = useState(true);
  const copySlides = slides;

  const questRef = useRef("");
  useEffect(() => {
    // setSlides([...addQuestion()]);
    if (slide.key !== slideKey) {
      setHideStyle(true);
    }
  }, [slideKey]);

  useEffect(() => {
    questRef.current.focus();
  }, [hideStyle]);

  function addQuestion() {
    copySlides.forEach((slide) => {
      if (slide.key === slideKey && questRef.current.value !== "") {
        slide.question = questRef.current.value;
      }
    });
    return copySlides;
  }
  /*
  function resetOpenInputs() {
    if (slide.key !== slideKey) {
      setHideStyle(true);
    }
  }*/
  /*Promjena iz question u input i obratno */
  function hidingElements() {
    // setSlideKey([slide.key]);
    setHideStyle((prev) => !prev);
  }
  return (
    <div className="top-cont">
      <p className="number">{number}</p>
      <div className="question-input-cont">
        <input
          ref={questRef}
          className="inpQuest"
          style={{ display: hideStyle ? "none" : "block" }}
          type="text"
        />
        <h2
          className="question"
          style={{ display: hideStyle ? "block" : "none" }}
        >
          {slide.question}
        </h2>
        <button
          className="textBtn"
          onClick={() => {
            //resetOpenInputs();
            setSlideKey(slide.key);
            if (!hideStyle) {
              setSlides([...addQuestion()]);
            }
            hidingElements();
          }}
        >
          {hideStyle ? "change" : "submit"}
        </button>
      </div>
    </div>
  );
}
