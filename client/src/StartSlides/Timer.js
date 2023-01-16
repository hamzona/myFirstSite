import { useEffect, useState } from "react";
import "./presentSlide.css";
function Timer({ time, clicked, correctCheck, setCorrectChek }) {
  const [currentTime, setCurrentTime] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setCurrentTime((prev) => {
        return (prev = prev - 1);
      });
      return;
    }, 1000);
  }, []);

  useEffect(() => {
    /*if (currentTime < 0) {
      setCorrectChek(false);
      console.log("manje od nule");
    }*/
    if (!correctCheck) {
      setCurrentTime(0);
    }
  }, [currentTime]);
  return (
    <div
      className="time"
      style={{ display: currentTime < 0 ? "none" : "block" }}
    >
      {currentTime}
    </div>
  );
}

export default Timer;
