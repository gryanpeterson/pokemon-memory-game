import { useEffect } from "react";

function Card({ name, sprite, pokemonSet, shuffleCards, makeSelection }) {
  return (
    <div
      className="flex flex-col items-center duration-300 rounded-md bg-black/30 hover:scale-110 "
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
