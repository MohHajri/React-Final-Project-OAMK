import React from "react";

function SearchForm({ setSearchTerm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="mySection">
      {/* <h2 className="section-title">search cocktails</h2> */}
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search your
            <br />
            <span className="fav">Favorite</span> Cocktail!
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type a Cocktail .."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
