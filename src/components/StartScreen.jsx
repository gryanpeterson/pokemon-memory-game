function StartScreen({ startGame }) {
  return (
    <div className="flex flex-col items-center flex-grow">
      <h1 className="mb-4 text-2xl text-center text-red-600">
        Pokémon Memory Card Game
      </h1>
      <p className="mx-10 my-4 text-black dark:text-black">
        Don't click on the same card twice! Cards are shuffled after every
        selection.
      </p>
      <button
        className="p-2 my-1 text-center text-black bg-gray-300 border-2 border-black border-solid rounded-lg dark:text-black"
        onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}
export default StartScreen;
