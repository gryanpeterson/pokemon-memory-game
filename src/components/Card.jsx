import cardback from "/src/assets/cardback.png";
function Card({
  name,
  sprite,
  pokemonSet,
  shuffleCards,
  makeSelection,
  isLoading,
}) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-around w-24 h-32 duration-300 rounded-md bg-black/40 hover:scale-110 ">
        <img className="rounded-md sm:w-32 sm:h-32" src={cardback} alt="" />
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-col items-center justify-around w-24 h-32 duration-300 rounded-md bg-black/40 hover:scale-110 "
        onClick={() => {
          makeSelection(name);
          shuffleCards(pokemonSet);
        }}>
        <img className="sm:w-32 sm:h-32" src={sprite} alt="" />
        <h1 className="text-sm text-center text-white capitalize">{name}</h1>
      </div>
    );
  }
}
export default Card;
