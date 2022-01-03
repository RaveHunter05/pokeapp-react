import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonNumber from "../containers/PokemonNumber.jsx";

import PokemonSearch from "../containers/PokemonName.jsx";

function pokemonNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonNumber />} />
        <Route path="/search" element={<PokemonSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default pokemonNavigator;
