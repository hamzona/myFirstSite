import { useState } from "react";
import { v4 } from "uuid";
import "./settings.css";
function Settings({ setColor }) {
  const colors = ["red", "blue", "yellow", "white", "purple", "green", "pink"];
  const [hideSettings, setHideSettings] = useState(false);
  return (
    <div className="Settings">
      <h1 className="title">Settings</h1>
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
        <input className="inpTimer" type="number" placeholder="time" />
      </div>
    </div>
  );
}

export default Settings;
