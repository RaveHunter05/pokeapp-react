import { useEffect, useState } from "react";

import { FcPrevious, FcNext } from "react-icons/fc";

import pokeServices from "../services/pokemon/pokemon.services.js";
import Search from "../components/Search.jsx";

function PokemonNumber() {
  const [pokemons, setPokemons] = useState({});
  const [currentPokemon, setCurrentPokemon] = useState(1);
  const [pokemonStrength, setPokemonStrength] = useState(null);

  useEffect(() => {
    pokeServices.getByNumber(currentPokemon).then((data) => {
      setPokemons(data);
      makeTypes(data.types);
    });
  }, [currentPokemon]);

  const makeTypes = (types) => {
    const finalTypes = types.map((type) => {
      return type.type.name;
    });
    pokeServices.getStrength(finalTypes).then((strengths) => {
      setPokemonStrength(strengths);
    });
  };

  return (
    <div className="bg-yellow-200 w-5/6 md:w-1/5 border-2 border-black rounded-lg flex flex-col justify-center items-center space-y-4 p-4 pb-16">
      <Search changePokemon={setCurrentPokemon} />
      {!!pokemons.sprites && !!pokemonStrength && (
        <div className="flex flex-col items-center">
          <h2 className="font-bold capitalize text-center">{pokemons.name}</h2>
          <img src={pokemons.sprites.front_default} className="h-56 w-auto" />
          <h2 className="font-bold pb-4"> Types: </h2>
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
          <section>
            <article>
              <h2 className="font-bold"> Strong against: </h2>
              <div className="flex flex-wrap space-x-2 justify-center pb-6 gap-y-4 mt-4">
                {pokemonStrength.strongAgainst.map((strong, index) => (
                  <div
                    key={index}
                    className={`border-2 border-black rounded-full capitalize font-bold py-2 px-4 text-white ${
                      strong.name === "normal"
                        ? "bg-yellow-800"
                        : strong.name === "grass"
                        ? "bg-emerald-400"
                        : strong.name === "fire"
                        ? "bg-red-500"
                        : strong.name === "flying"
                        ? "bg-violet-300"
                        : strong.name === "electric"
                        ? "bg-amber-300"
                        : strong.name === "ground"
                        ? "bg-yellow-200 text-black"
                        : strong.name === "bug"
                        ? "bg-emerald-400"
                        : strong.name === "water"
                        ? "bg-sky-400"
                        : strong.name === "ice"
                        ? "bg-sky-300"
                        : strong.name === "poison"
                        ? "bg-violet-400"
                        : strong.name === "fairy"
                        ? "bg-pink-300"
                        : "bg-violet-50 text-black"
                    }`}
                  >
                    <h2> {strong.name} </h2>
                  </div>
                ))}
              </div>
            </article>
            <article>
              <h2 className="font-bold"> Weak against: </h2>
              <div className="flex flex-wrap space-x-2 justify-center pb-6 gap-y-4 mt-4">
                {pokemonStrength.weakAgainst.map((weak, index) => (
                  <div
                    key={index}
                    className={`border-2 border-black rounded-full capitalize font-bold py-2 px-4 text-white ${
                      weak.name === "normal"
                        ? "bg-yellow-800"
                        : weak.name === "grass"
                        ? "bg-emerald-400"
                        : weak.name === "fire"
                        ? "bg-red-500"
                        : weak.name === "flying"
                        ? "bg-violet-300"
                        : weak.name === "electric"
                        ? "bg-amber-300"
                        : weak.name === "ground"
                        ? "bg-yellow-200 text-black"
                        : weak.name === "bug"
                        ? "bg-emerald-400"
                        : weak.name === "water"
                        ? "bg-sky-400"
                        : weak.name === "ice"
                        ? "bg-sky-300"
                        : weak.name === "poison"
                        ? "bg-violet-400"
                        : weak.name === "fairy"
                        ? "bg-pink-300"
                        : "bg-violet-50 text-black"
                    }`}
                  >
                    <h2> {weak.name} </h2>
                  </div>
                ))}
              </div>
            </article>
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
