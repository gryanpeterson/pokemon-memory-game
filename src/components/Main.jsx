import { useEffect } from "react";
import Card from "./Card";

function Main({
  pokemonSet,
  shuffleCards,
  makeSelection,
  fetchPokemon,
  isLoading,
  setIsLoading,
}) {
  useEffect(() => {
    setIsLoading(true);
    fetchPokemon();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="grid w-5/6 grid-cols-3 grid-rows-2 gap-2 place-items-center h-1/2 xl:w-3/5 ">
      {pokemonSet.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
            pokemonSet={pokemonSet}
            shuffleCards={shuffleCards}
            makeSelection={makeSelection}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}
export default Main;
