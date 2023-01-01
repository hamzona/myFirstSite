import "./slide.css";
import Answers from "./answers";
import Question from "./Question";
function Slide({
  setIsChangeDel,
  deleteSlide,
  hendleAnswer,
  setIsChange,
  answerKey,
  slides,
  slide,
  setSlides,
  number,
  slideKey,
  setSlideKey,
  setAnswerKey,
  selectedAnsw,
  selectedQues,
  setSelectedAnsw,
  setSelectedQuset,
  color,
  setColor,
}) {
  return (
    <div
      className="table"
      style={{
        backgroundColor: color,
      }}
      onClick={() => /*selektujem slide*/ setSlideKey(slide.key)}
    >
      <button
        style={{ display: slides.length === 1 ? "none" : "flex" }}
        className="delete"
        onClick={() => setIsChangeDel((prev) => !prev)}
      >
        X
      </button>
      <Question
        setSlideKey={setSlideKey}
        slides={slides}
        slideKey={slideKey}
        setSelectedQuset={setSelectedQuset}
        setSelectedAnsw={setSelectedAnsw}
        selectedQues={selectedQues}
        number={number}
        setSlides={setSlides}
        slide={slide}
      />

      <div className="answers">
        {slide.answers.map((answer, i) => {
          return (
            <Answers
              color={color}
              index={i}
              setSlides={setSlides}
              setSlideKey={setSlideKey}
              slide={slide}
              hendleAnswer={hendleAnswer}
              setSelectedQuset={setSelectedQuset}
              selectedAnsw={selectedAnsw}
              setSelectedAnsw={setSelectedAnsw}
              setIsChange={setIsChange}
              answerKey={answerKey}
              slides={slides}
              slideKey={slideKey}
              answer={answer}
              setAnswerKey={setAnswerKey}
              key={answer.key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slide;
