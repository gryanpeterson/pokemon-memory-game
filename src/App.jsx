import { useEffect, useState, useCallback } from "react";
import bg from "/src/assets/bg.jpg";
import Score from "./components/Score";
import Main from "./components/Main";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import StartScreen from "./components/StartScreen";
import GameOverScreen from "./components/GameOverScreen";
import Footer from "./components/Footer";
import LevelUpScreen from "./components/LevelUpScreen";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );
  const [pokemonSet, setPokemonSet] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [gameStatus, setGameStatus] = useState("start");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemon = async () => {
    for (let pokemonNumber of getUniqueRandomNumbers(1, 151, 6)) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
      );
      const data = await response.json();
      let newPokemon = {
        id: uuidv4(),
        name: data.name,
        sprite: data.sprites.front_default,
      };
      setPokemonSet((previousState) => [...previousState, newPokemon]);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getUniqueRandomNumbers = (min, max, count) => {
    let numbers = new Set();
    while (numbers.size < count) {
      numbers.add(getRandomNumber(min, max));
    }
    return Array.from(numbers);
  };

  const shuffleCards = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    newArray.forEach((object) => {
      object.id = uuidv4();
    });
    setPokemonSet(newArray);
  };

  const makeSelection = (name) => {
    for (let pokemon of selectedPokemon) {
      if (pokemon === name) {
        setGameStatus("end");

        return;
      }
    }
    incrementScore();
    setSelectedPokemon([...selectedPokemon, name]);
    if (selectedPokemon.length === 5) {
      setGameStatus("level up");
    }
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const updateHighScore = () => {
    if (highScore < score) {
      localStorage.setItem("highScore", score);
      setHighScore(localStorage.getItem("highScore"));
    }
  };

  const startGame = () => {
    setGameStatus("in progress");
  };

  const restartGame = () => {
    setGameStatus("in progress");
    setScore(0);
    setPokemonSet([]);
    setSelectedPokemon([]);
    fetchPokemon();
  };

  const increaseLevel = () => {
    setGameStatus("in progress");
    setPokemonSet([]);
    setSelectedPokemon([]);
    fetchPokemon();
    updateHighScore();
  };

  if (gameStatus === "start") {
    return (
      <div
        className="flex flex-col items-center w-screen h-screen bg-right bg-cover"
        style={{ backgroundImage: `url(${bg})` }}>
        <StartScreen startGame={startGame} />
        <Footer />
      </div>
    );
  } else if (gameStatus === "in progress") {
    return (
      <div
        className="flex flex-col items-center justify-between w-screen h-screen bg-right bg-cover"
        style={{ backgroundImage: `url(${bg})` }}>
        <Header />
        <Score
          score={score}
          highScore={highScore}
          incrementScore={incrementScore}
        />
        <Main
          pokemonSet={pokemonSet}
          shuffleCards={shuffleCards}
          makeSelection={makeSelection}
          selectedPokemon={selectedPokemon}
        />
        <Footer />
      </div>
    );
  } else if (gameStatus === "end") {
    return (
      <div
        className="flex flex-col items-center w-screen h-screen bg-right bg-cover"
        style={{ backgroundImage: `url(${bg})` }}>
        <GameOverScreen restartGame={restartGame} fetchPokemon={fetchPokemon} />
        <Footer />
      </div>
    );
  } else if (gameStatus === "level up") {
    return (
      <div
        className="flex flex-col items-center w-screen h-screen bg-right bg-cover"
        style={{ backgroundImage: `url(${bg})` }}>
        <LevelUpScreen increaseLevel={increaseLevel} />
        <Footer />
      </div>
    );
  }
}

export default App;
