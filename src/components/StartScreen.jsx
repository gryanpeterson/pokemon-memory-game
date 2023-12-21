function StartScreen({ startGame }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mx-10 my-4 text-xl text-center text-black">
        Welcome to the Pokemon Memory Card Game
      </h1>
      <p className="mx-10 my-4 ">
        The objective of the game is to test your memory. Upon starting the
        game, Pokemon cards will be displayed. Select a card then the cards will
        be shuffled. Don't pick the same card twice or you lose!
      </p>
      <button
        className="p-2 my-1 text-center bg-gray-300 border-2 border-black border-solid rounded-lg"
        onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}
export default StartScreen;
