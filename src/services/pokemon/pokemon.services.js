import api from "../../services";

const pokemonServices = {
  getByNumber: async (number) => {
    const pokemon = await api.get(`pokemon/${number}`);
    console.log(pokemon.data);
    return pokemon.data;
  },
  getByName: async (name) => {
    const pokemon = await api.get(`pokemon/${name}`);
    return pokemon.data;
  },
  getByType: async (typeNumber) => {
    const pokemons = await api.get(`type/${typeNumber}`);
    return pokemons.data;
  },
  getByAbility: async (abilityNumber) => {
    const pokemons = await api.get(`ability/${abilityNumber}`);
    return pokemons.data;
  },
  getWithPagination: async ({ limit, offset }) => {
    const pokemons = await api.get("pokemon", {
      params: {
        limit,
        offset,
      },
    });
    return pokemons.data;
  },
};

export default pokemonServices;
