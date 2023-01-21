import { Routes, Route } from "react-router-dom";
import App from "../Slides/App";
import SlidesContextProvider from "../GlobalContext/DataSlides";
import StartQuiz from "../StartSlides/StartQuiz";
import NavBar from "../NavBar";
import Home from "../Home/Home";
import "./main.css";
function Main() {
  return (
    <SlidesContextProvider>
      <NavBar />
      <div className="elements">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/start" element={<StartQuiz />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </SlidesContextProvider>
  );
}
export default Main;
