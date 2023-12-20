function Card({ name, sprite, pokemonSet, shuffleCards, makeSelection }) {
  return (
    <div
      className="rounded-md bg-black/30"
      onClick={() => {
        makeSelection(name);
        shuffleCards(pokemonSet);
      }}>
      <img src={sprite} alt="" />
      <h1 className="text-center text-white capitalize">{name}</h1>
    </div>
  );
}
export default Card;
