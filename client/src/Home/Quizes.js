import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useUpdateDataSlides } from "../GlobalContext/DataSlides";

const Quizes = ({ data }) => {
  const setSlides = useUpdateDataSlides();

  async function chooseQuiz(quiz) {
    await setSlides(quiz.slides);
  }
  return (
    <div>
      {" "}
      {data === undefined
        ? "Loading..."
        : data.map((item, index) => {
            return (
              <div key={index}>
                {" "}
                {item.quizName}
                <Link to="/start">
                  <button
                    onClick={() => {
                      chooseQuiz(item);
                    }}
                  >
                    Start
                  </button>
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default Quizes;
