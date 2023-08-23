import { useState } from "react";

const question = [
  {
    question1: "Which is the meaning of CSS?",
    id: "1",
    color: "#c3fd81",
    answer: "Cascading Style Sheets.",
  },
  {
    question1: "What is the meaning of HTML?",
    id: "2",
    color: "#f7f75f",
    answer: "HyperText Markup Language",
  },
  {
    question1: "What is meaning of JSX?",
    id: "3",
    color: "#d1a7fc",
    answer: "JavaScript XML",
  },
  {
    question1: "What is state?",
    id: "4",
    color: "#aafafa",
    answer: "state refers to the data that a component manages",
  },
  {
    question1: "What is props?",
    id: "5",
    color: "#f88282",
    answer: "props stands for properties",
  },
  {
    question1: "What is key?",
    id: "6",
    color: "#52ec97",
    answer: "Is a unique in rendering a list of elements",
  },
];

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="container">
      {question.map((item) => (
        <Each item={item} key={item.id} />
      ))}
    </div>
  );
}

function Each({ item }) {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter(e) {
    setIsHovering(true);
  }
  function handleMouseLeave(e) {
    setIsHovering(false);
  }

  const style = {
    backgroundColor: item.color,
    height: "70%",
    paddingTop: "60px",
    borderRadius: "12px",
    fontSize:"24px"
  };
  const style1 = {
    // backgroundColor: item.color,
    height: "70%",
    paddingTop: "60px",
    borderRadius: "12px",
    fontSize:"24px"
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="listitem"
    >
      {isHovering ? <div style={style}>{item.answer}</div> :   <div style={style1}>{item.question1}</div> } 
    </div>
  );
}
export default App;
