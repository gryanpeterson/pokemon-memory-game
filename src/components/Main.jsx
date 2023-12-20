import Card from "./Card";

function Main({ pokemonSet, shuffleCards, makeSelection }) {
  return (
    <div className="grid w-3/4 grid-cols-3 grid-rows-2 gap-2 place-items-center h-1/2">
      {pokemonSet.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
            pokemonSet={pokemonSet}
            shuffleCards={shuffleCards}
            makeSelection={makeSelection}
          />
        );
      })}
    </div>
  );
}
export default Main;
