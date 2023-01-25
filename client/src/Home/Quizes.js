import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useUpdateDataSlides } from "../GlobalContext/DataSlides";
import "./quizes.css";
const Quizes = ({ data }) => {
  const setSlides = useUpdateDataSlides();

  function chooseQuiz(quiz) {
    setSlides(quiz.slides);
  }

  function editQuiz(quiz) {
    setSlides(quiz.slides);
  }
  return (
    <div>
      {" "}
      {data === undefined
        ? "Loading..."
        : data.map((item, index) => {
            return (
              <div
                className="quizes"
                style={{ backgroundColor: item.slides[0].color }}
                key={index}
              >
                {" "}
                {item.quizName}
                <div>
                  <Link to="/start">
                    <button
                      className="button"
                      onClick={() => {
                        chooseQuiz(item, "start");
                      }}
                    >
                      Start
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      className="button"
                      onClick={() => {
                        editQuiz(item, "edit");
                      }}
                    >
                      EDIT
                    </button>
                  </Link>
                </div>{" "}
              </div>
            );
          })}
    </div>
  );
};

export default Quizes;
