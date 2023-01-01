import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const DataSlides = createContext();
const UpdateDataSlides = createContext();

/*exportujem slides */
export function useDataSlides() {
  return useContext(DataSlides);
}
/*exportujem setSlides*/
export function useUpdateDataSlides() {
  return useContext(UpdateDataSlides);
}

export default function SlidesContextProvider({ children }) {
  /*glavni state koji cu mjenjati u Slides folderu i printat u StartSlides folderu */
  const [slides, setSlides] = useState([
    {
      key: v4(),
      question: "question",
      color: ["rgb(155, 33, 33)", "rgb(221, 90, 90)"],
      time: 5,
      answers: [
        { key: v4(), correct: true, content: "answer 1" },
        { key: v4(), correct: false, content: "answer 2" },
        { key: v4(), correct: false, content: "answer 3" },
        { key: v4(), correct: false, content: "answer 4" },
      ],
    },
  ]);

  return (
    <DataSlides.Provider value={slides}>
      <UpdateDataSlides.Provider value={setSlides}>
        {children}
      </UpdateDataSlides.Provider>
    </DataSlides.Provider>
  );
}
