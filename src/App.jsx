import { useState } from "react";
import bg from "/src/assets/bg.jpg";
import Score from "./components/Score";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div
      className="flex flex-col items-center w-screen h-screen bg-right bg-cover"
      style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <Score score={score} highScore={highScore} />
      <Main />
    </div>
  );
}

export default App;
