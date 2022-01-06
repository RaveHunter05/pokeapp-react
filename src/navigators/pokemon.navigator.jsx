import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonNumber from "../containers/PokemonNumber.jsx";

import PokemonSearch from "../containers/PokemonName.jsx";

import PokemonType from "../containers/PokemonType.jsx";

function pokemonNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonNumber />} />
        <Route path="/search" element={<PokemonSearch />} />
        <Route path="/type" element={<PokemonType />} />
      </Routes>
    </BrowserRouter>
  );
}

export default pokemonNavigator;
