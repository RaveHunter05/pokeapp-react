import api from "../../services";

const pokemonServices = {
  /**
   * Get pokemons by number
   * @param {number} number
   * @returns {Object} Pokemon information
   */
  getByNumber: async (number) => {
    const pokemon = await api.get(`pokemon/${number}`);
    return pokemon.data;
  },
  /**
   * Get pokemon by name
   * @param {string} name
   * @returns {Object} Pokemon information
   */
  getByName: async (name) => {
    const pokemon = await api.get(`pokemon/${name}`);
    return pokemon;
  },
  /**
   * Get the type of pokemon
   * @param {number} typeNumber
   * @returns {Object} Pokemon type information
   */
  getByType: async (typeNumber) => {
    const pokemons = await api.get(`type/${typeNumber}`);
    return pokemons;
  },
  getStrength: async (types) => {
    let strongAgainst = [];
    let weakAgainst = [];
    for (const type of types) {
      let currentType = await pokemonServices.getByType(type);
      strongAgainst = [
        ...strongAgainst,
        ...currentType.data.damage_relations.double_damage_to,
      ];
      weakAgainst = [
        ...weakAgainst,
        ...currentType.data.damage_relations.double_damage_from,
      ];
    }

    return { strongAgainst, weakAgainst };
  },
  /**
   * Search ability by number
   * @param {number} abilityNumber
   * @returns {Object} Ability information
   */
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
