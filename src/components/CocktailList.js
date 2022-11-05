import React from "react";
import Cocktail from "./Cocktail";

function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktails found</h2>;
  }
  return (
    <section className="section">
      <div className="all-cocktails">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
export default CocktailList;
