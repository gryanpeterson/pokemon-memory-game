function Score({ score, highScore }) {
  return (
    <div className="">
      <h2 className="mb-2">High Score: {highScore}</h2>
      <h3>Current Score: {score}</h3>
    </div>
  );
}
export default Score;