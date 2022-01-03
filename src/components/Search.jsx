import { Formik } from "formik";

function searchRequest(values, actions) {

}

function Search() {
  return (
    <Formik
      initialValues={{ pokemonName: "pikachu" }}
      onSubmit={(values, actions) => searchRequest(values, actions)}
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
          <input
            type="text"
            placeholder="Pokemon Name"
            onChange={handleChange("pokemonName")}
            onBlur={handleBlur("pokemonName")}
            value={values.pokemonName}
	      className="mr-2 p-2 rounded-full outline-0 "
          />

          {errors.pokemonName && touched.pokemonName && (
            <p className="text-red-500"> {errors.pokemonName} </p>
          )}
          <button
            onClick={handleSubmit}
            className="bg-sky-500 text-white p-1 font-bold rounded-lg border-2 border-black"
          >
            Search
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Search;
