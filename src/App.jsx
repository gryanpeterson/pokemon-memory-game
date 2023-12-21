import { useEffect, useState } from "react";
import bg from "/src/assets/bg.jpg";
import Score from "./components/Score";
import Main from "./components/Main";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import StartScreen from "./components/StartScreen";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonSet, setPokemonSet] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [gameStatus, setGameStatus] = useState("start");

  useEffect(() => {
    if (gameStatus === "end") {
      console.log("Game Over");
    }
  }, [gameStatus]);

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          let newPokemon = {
            id: uuidv4(),
            name: data.name,
            sprite: data.sprites.front_default,
          };
          setPokemonSet((previousState) => [...previousState, newPokemon]);
        });
    }
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 151);
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
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  // const clearSelectedPokemon = () => {
  //   if (selectedPokemon.length === 6) {
  //     const emptyArray = [];
  //     setSelectedPokemon(emptyArray);
  //   }
  // };

  const startGame = () => {
    setGameStatus("in progress");
  };

  if (gameStatus === "start") {
    return (
      <div
        className="flex flex-col items-center w-screen h-screen bg-right bg-cover"
        style={{ backgroundImage: `url(${bg})` }}>
        <StartScreen startGame={startGame} />
      </div>
    );
  } else if (gameStatus === "in progress") {
    return (
      <div
        className="flex flex-col items-center w-screen h-screen bg-right bg-cover"
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
      </div>
    );
  }
}

export default App;
