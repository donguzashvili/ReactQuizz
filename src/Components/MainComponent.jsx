import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../style/MainComponent.css";

export default function MainComponent(props) {
  const [length, setLength] = useState(20);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const history = useHistory();

  //check input range
  const inputValue = () => {
    let output = document.getElementById("output");
    let input = document.getElementById("length");
    output.value = Math.floor(input.value);
    setLength(output.value);
  };

  //if parent component's data isnt updated, update it!
  useEffect(() => {
    if (
      length !== props.length ||
      difficulty !== props.difficulty ||
      type !== props.type ||
      category !== props.category
    ) {
      props.length(length);
      props.category(category);
      props.type(type);
      props.difficulty(difficulty);
    }
  });

  //check select values
  const checkSelects = () => {
    let category = document.getElementById("category").value;
    let difficulty = document.getElementById("difficulty").value;
    let type = document.getElementById("type").value;
    let typeBox = document.getElementById("type");
    if (category !== "" && difficulty !== "") {
      typeBox.disabled = true;
    }

    setCategory(category);

    setDifficulty(difficulty);

    setType(type);
  };

  const checkInfo = (e) => {
    e.preventDefault();

    let categoryid = document.getElementById("category");
    let categoryTxt = categoryid.options[categoryid.selectedIndex].text;

    //update parent state
    props.length(length);

    props.difficulty(difficulty);
    props.type(type);
    props.category(category);

    props.categoryText(categoryTxt);

    props.onClick();
    history.push("/startQuizz");
  };

  return (
    <div className="main-component">
      <form onSubmit={checkInfo} onInput={inputValue} onChange={checkSelects}>
        <label htmlFor="length" className="length">
          <p>Question Length</p>
          <output id="output" name="questionLength" htmlFor="length">
            {length}
          </output>
          <input id="length" type="range" min="10" max="20" step="0.1" />
        </label>
        <label htmlFor="category" className="select">
          <p>Select Category</p>
          <select name="category" id="category">
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature </option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematicse</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
        </label>
        <label htmlFor="category">
          <p>Select Difficulty</p>

          <select name="category" id="difficulty">
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label htmlFor="category">
          <p>Select Type</p>

          <select name="category" id="type">
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
