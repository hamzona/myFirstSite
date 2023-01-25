import { useEffect, useState } from "react";
import Quizes from "./Quizes";
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
      <Quizes data={data} />
    </div>
  );
}
export default Home;
