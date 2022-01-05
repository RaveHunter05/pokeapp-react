import { useEffect, useState } from "react";

import { FcPrevious, FcNext } from "react-icons/fc";

import pokeServices from "../services/pokemon/pokemon.services.js";
import Search from "../components/Search.jsx";

function PokemonNumber() {
  const [pokemons, setPokemons] = useState({});
  const [currentPokemon, setCurrentPokemon] = useState(1);
  useEffect(() => {
    pokeServices.getByNumber(currentPokemon).then((data) => {
      setPokemons(data);
    });
  }, [currentPokemon]);

  return (
    <div className="bg-yellow-200 w-5/6 md:w-1/5 border-2 border-black rounded-lg flex flex-col justify-center items-center space-y-4 p-4 pb-16">
      <Search changePokemon={setCurrentPokemon} />
      {!!pokemons.sprites && (
        <div>
          <h2> Searching pokemons by name... </h2>
          <img src={pokemons.sprites.front_default} className="h-56 w-auto" />
          <article className="flex flex-wrap space-x-2 justify-center pb-6">
            {pokemons.types.map((type, index) => (
              <div
                key={index}
                className={`border-2 border-black rounded-full capitalize font-bold py-2 px-4 text-white ${
                  type.type.name === "normal"
                    ? "bg-yellow-800"
                    : type.type.name === "grass"
                    ? "bg-emerald-400"
                    : type.type.name === "fire"
                    ? "bg-red-500"
                    : type.type.name === "flying"
                    ? "bg-violet-300"
                    : type.type.name === "electric"
                    ? "bg-amber-300"
                    : type.type.name === "ground"
                    ? "bg-yellow-200 text-black"
                    : type.type.name === "bug"
                    ? "bg-emerald-400"
                    : type.type.name === "water"
                    ? "bg-sky-400"
                    : type.type.name === "ice"
                    ? "bg-sky-300"
                    : type.type.name === "poison"
                    ? "bg-violet-400"
                    : type.type.name === "fairy"
                    ? "bg-pink-300"
                    : "bg-violet-50 text-black"
                }`}
              >
                <h2> {type.type.name}</h2>
              </div>
            ))}
          </article>
          <section className="space-y-2 capitalize">
            <h2>
              {" "}
              <span className="font-bold">Name: </span> {pokemons.name}{" "}
            </h2>
            <h2>
              {" "}
              <span className="font-bold">Weight: </span> {pokemons.height} KG{" "}
            </h2>
            <h2>
              {" "}
              <span className="font-bold underline"> Stats </span>{" "}
            </h2>
            {pokemons.stats.map((stat, index) => (
              <div key={index}>
                <h2>
                  {" "}
                  <span className="font-bold capitalize">
                    {" "}
                    {stat.stat.name} :{" "}
                  </span>{" "}
                  {stat.base_stat}{" "}
                </h2>
              </div>
            ))}
          </section>
        </div>
      )}
      <section className="flex items-center">
        <FcPrevious
          className="cursor-pointer text-lg"
          onClick={() => setCurrentPokemon(currentPokemon - 1)}
        />
        <h2>
          {" "}
          Current pokemon: <span className="font-bold">
            {" "}
            {currentPokemon}{" "}
          </span>{" "}
        </h2>
        <FcNext
          className="cursor-pointer text-lg"
          onClick={() => setCurrentPokemon(currentPokemon + 1)}
        />
      </section>
    </div>
  );
}

export default PokemonNumber;
