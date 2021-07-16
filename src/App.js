import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import Questions from "./Components/Questions";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [length, setLength] = useState(20);
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const previousData = useRef();

  const fetchData = () => {
    fetch(
      `https://opentdb.com/api.php?amount=${length}&category=${category}&difficulty=${difficulty}&type=${type}`
    )
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData.results);
        //if state doesn't update force it
        previousData.current = fetchedData.results;
      });
  };
  //forcing data to update continues here
  useEffect(() => {
    if (previousData.current !== data) {
      setData(previousData.current);
    }
  }, [data]);

  return (
    <div>
      <Router>
        <Route exact path="/ReactQuizz">
          <MainComponent
            onClick={fetchData}
            length={setLength}
            type={setType}
            difficulty={setDifficulty}
            category={setCategory}
            categoryText={setCategoryText}
          />
        </Route>
        <Route path="/startQuizz">
          <Questions
            length={length}
            type={type}
            difficulty={difficulty}
            category={category}
            data={data}
            categoryTxt={categoryText}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
