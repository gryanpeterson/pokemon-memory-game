import { useEffect } from "react";

function Card({ name, sprite, pokemonSet, shuffleCards, makeSelection }) {
  return (
    <div
      className="flex flex-col items-center justify-around w-24 h-32 duration-300 rounded-md bg-black/40 hover:scale-110 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 xl:w-56 xl:h-72"
      onClick={() => {
        makeSelection(name);
        shuffleCards(pokemonSet);
      }}>
      <img className="sm:w-36 sm:h-36" src={sprite} alt="" />
      <h1 className="text-sm text-center text-white capitalize sm:text-md md:text-lg lg:text-xl xl:text-2xl">
        {name}
      </h1>
    </div>
  );
}
export default Card;
