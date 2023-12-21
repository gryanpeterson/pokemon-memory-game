import gameOverPikachu from "/src/assets/gameOverPikachu.png";

function GameOverScreen({ restartGame }) {
  return (
    <div className="flex flex-col items-center grow">
      <h1 className="mx-10 my-4 text-5xl text-center text-red-600">
        Game Over
      </h1>
      <img
        className="w-24 h-24 rounded-md"
        src={gameOverPikachu}
        alt="Pikachu with a surprised look on their face."
      />
      <p className="mx-8 my-4">Oh no! You clicked the same card twice!</p>
      <button
        className="p-2 my-1 text-center bg-gray-300 border-2 border-black border-solid rounded-lg"
        onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
}
export default GameOverScreen;
