import { useEffect, useState } from "react";
import "./App.css";

import pokeServices from "./services/pokemon/pokemon.services.js";

function App() {
  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    pokeServices.getByNumber(1).then((data) => {
      setPokemons(data);
    });
  }, []);
  return (
    <div className="App">
      {!!pokemons.sprites && (
        <div>
          <h2> Name: {pokemons.name} </h2>
          <img src={pokemons.sprites.front_default} className="h-56 w-auto" />
          <h2> Height: {pokemons.height} KG </h2>
          <h2> Stats: </h2>
          {pokemons.stats.map((stat) => (
            <div>
              <h2>
                {" "}
                {stat.stat.name} : {stat.base_stat}{" "}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
