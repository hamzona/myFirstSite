import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:5000/routes/slides")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      {data === undefined
        ? "Loading..."
        : data.map((item, index) => {
            return <div key={index}> {item.quizName}</div>;
          })}
    </div>
  );
}
export default Home;
