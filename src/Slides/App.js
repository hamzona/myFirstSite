import Slide from "./Slide";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
//import SetQuestionAnswers from '../SetTable/SetQuestionAnswers'
import "../app.css";
import Settings from "./settings";
import {
  useDataSlides,
  useUpdateDataSlides,
} from "../GlobalContext/DataSlides";

function App() {
  /*uzimam slide i setSlide iz Contexta */
  const slides = useDataSlides();
  const setSlides = useUpdateDataSlides();
  /* */
  const [color, setColor] = useState("white");
  /*Sluzi za selektovanje Slida i answera*/
  const [slideKey, setSlideKey] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  /*klikanje odgovora*/
  const [isChange, setIsChange] = useState(false);
  /*brisanje slidova na promjenu */
  const [isChangeDel, setIsChangeDel] = useState(false);
  let copySlides = slides;

  /*Funkcija koja mjenja tacnost odgovora u njegovu suprotnu vrijednost i vraca taj obj*/

  function settingColor() {
    copySlides.forEach((slide) => {
      slide.color = color;
    });
    return copySlides;
  }
  useEffect(() => {
    setSlides([...settingColor()]);
  }, [color]);
  function hendleAnswer() {
    //answerDiv.target.classList.add('selected');
    copySlides.forEach((slide) => {
      if (slide.key === slideKey) {
        slide.answers.forEach((answer) => {
          if (answer.key === answerKey) {
            answer.correct = !answer.correct;
          }
        });
      }
    });
    return copySlides;
  }

  useEffect(() => {
    setSlides([...hendleAnswer()]);
  }, [isChange]);

  /*dodavanje slide*/
  function addSlide() {
    setSlides((prev) => [
      ...prev,
      {
        key: v4(),
        question: "question",
        color: color,
        answers: [
          { key: v4(), correct: true, content: "answer 1" },
          { key: v4(), correct: false, content: "answer 2" },
          { key: v4(), correct: false, content: "answer 3" },
          { key: v4(), correct: false, content: "answer 4" },
        ],
      },
    ]);
  }

  /*delete slide */

  function deleteSlide() {
    if (copySlides[1] !== undefined) {
      setSlides(
        copySlides.filter((slide) => {
          return slide.key !== slideKey ? slide : "";
        })
      );
    }
  }
  useEffect(() => {
    deleteSlide();
  }, [isChangeDel]);

  return (
    <div className="container">
      {/* <SetQuestionAnswers className="set-cont" addSlide={addSlide} answerKey={answerKey} setSlides={setSlides} slideKey={slideKey} setSlideKey={setSlideKey} slides={slides}/>*/}
      <Settings setSlides={setSlides} slides={slides} setColor={setColor} />
      <div className="slide-cont">
        {slides.map((slide, i) => {
          return (
            <Slide /*selectedAnsw={selectedAnsw} setSelectedAnsw={setSelectedAnsw} selectedQues={selectedQues} setSelectedQuset={setSelectedQuset}*/
              setIsChangeDel={setIsChangeDel}
              color={color}
              setIsChange={setIsChange}
              slides={slides}
              answerKey={answerKey}
              setSlides={setSlides}
              slideKey={slideKey}
              setAnswerKey={setAnswerKey}
              setSlideKey={setSlideKey}
              slide={slide}
              number={i + 1}
              key={slide.key}
              hendleAnswer={hendleAnswer}
            />
          );
        })}
      </div>
      <button className="addBtn" onClick={addSlide}>
        +
      </button>
    </div>
  );
}

export default App;
