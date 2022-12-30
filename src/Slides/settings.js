import { useState } from "react";
import { v4 } from "uuid";
import "./settings.css";
function Settings({ setColor }) {
  const colors = ["red", "blue", "yellow", "white", "black", "green", "pink"];
  const [hideSettings, setHideSettings] = useState(false);
  return (
    <div className="Settings">
      <div
        className="colorBtn"
        onClick={() => setHideSettings((prev) => !prev)}
      >
        change color
      </div>
      <div
        style={{ display: hideSettings ? "block" : "none" }}
        className="color-container"
      >
        {colors.map((color) => {
          return (
            <div
              onClick={() => {
                setColor(color);
              }}
              key={v4()}
              className="color-round"
              style={{ backgroundColor: color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Settings;
