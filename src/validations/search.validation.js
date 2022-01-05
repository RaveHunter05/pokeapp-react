import * as Yup from "yup";

const searchPokemonSchema = Yup.object().shape({
  pokemonName: Yup.string().required("Pokemon name is required"),
});

export default searchPokemonSchema;
