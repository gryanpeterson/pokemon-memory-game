function Score({ score, highScore }) {
  return (
    <div className="">
      <h2 className="mb-2 text-xl text-black sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        High Score: {highScore}
      </h2>
      <h3 className="text-xl text-black sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Current Score: {score}
      </h3>
    </div>
  );
}
export default Score;
