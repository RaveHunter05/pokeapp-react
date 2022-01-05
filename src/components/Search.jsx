import { Formik } from "formik";

import Notiflix from "notiflix";

import { searchPokemonSchema } from "../validations";
import pokemonServices from "../services/pokemon/pokemon.services.js";

function Search({ changePokemon }) {
  const searchRequest = (values, actions) => {
    pokemonServices
      .getByName(values.pokemonName)
      .then((pokemon) => {
        changePokemon(pokemon.data.id);
      })
      .catch((e) => {
        if (e.status === 404) {
          actions.setFieldError("finalResult", "Pokemon not found");
        }
      });
  };
  return (
    <Formik
      initialValues={{ pokemonName: "", finalResult: "" }}
      onSubmit={(values, actions) => searchRequest(values, actions)}
      validationSchema={searchPokemonSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              return handleSubmit();
            }
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Pokemon Name"
              onChange={handleChange("pokemonName")}
              onBlur={handleBlur("pokemonName")}
              value={values.pokemonName}
              className="mr-2 p-2 rounded-full outline-0 "
            />

            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-sky-500 text-white p-1 font-bold rounded-lg border-2 border-black"
            >
              Search
            </button>
          </div>
          {errors.pokemonName && touched.pokemonName && (
            <p className="text-red-500 pt-1"> {errors.pokemonName} </p>
          )}
          {errors.finalResult && (
            <div className="text-red-500 ">Pokemon not found</div>
          )}
        </form>
      )}
    </Formik>
  );
}

export default Search;
