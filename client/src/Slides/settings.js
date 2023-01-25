import { useState, useRef } from "react";
import { v4 } from "uuid";
import "./settings.css";
import { sentData } from "../GlobalContext/DataSlides";
function Settings({ setColor, setSlides, slides }) {
  const colors = [
    "red",
    "blue",
    "yellow",
    "white",
    "purple",
    "green",
    "pink",
    "gray",
  ];
  const [hideSettings, setHideSettings] = useState(false);
  const [name, setName] = useState("");
  const timeInput = useRef(15);
  let copySlides = slides;
  function AddTime() {
    copySlides.forEach((slide) => {
      slide.time = parseInt(timeInput.current.value);
    });
    console.log(copySlides);
    return copySlides;
  }
  function hendleName(e) {
    setName(e.target.value);
  }
  function sendingData() {
    if (name === "") {
      console.log("Name is required");
    }
    sentData(slides, name);
  }
  return (
    <div className="Settings">
      <div>
        <input
          value={name}
          onChange={(e) => {
            hendleName(e);
          }}
          type="text"
          placeholder="name"
        />
      </div>
      <button onClick={() => sendingData()}>SAVE</button>
      <div className="colors-cont">
        <div
          className="colorBtn"
          onClick={() => setHideSettings((prev) => !prev)}
        >
          change color
        </div>

        <div
          style={{ display: hideSettings ? "block" : "none" }}
          className="colors"
        >
          {colors.map((color) => {
            return (
              <div
                className="color-round"
                onClick={() => {
                  setColor(color);
                }}
                key={v4()}
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="timer-cont">
        <div className="timer">Set timer</div>
        <input
          ref={timeInput}
          className="inpTimer"
          onInput={() => {
            setSlides([...AddTime()]);
          }}
          type="number"
          placeholder="time"
        />
      </div>
    </div>
  );
}

export default Settings;
