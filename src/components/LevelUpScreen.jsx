import levelUpPikachu from "/src/assets/levelUpPikachu.jpeg";

function LevelUpScreen({ increaseLevel }) {
  return (
    <div className="flex flex-col items-center grow">
      <h1 className="mx-10 my-4 text-5xl text-center text-red-600">
        Level Up!
      </h1>
      <img
        className="w-32 h-32 rounded-md"
        src={levelUpPikachu}
        alt="Pikachu with a surprised look on their face."
      />
      <p className="mx-8 my-4">You leveled up!</p>
      <button
        className="p-2 my-1 text-center bg-gray-300 border-2 border-black border-solid rounded-lg"
        onClick={increaseLevel}>
        Next Level
      </button>
    </div>
  );
}
export default LevelUpScreen;
