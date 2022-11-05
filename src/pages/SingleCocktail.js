import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          if (res.data.drinks) {
            //renaming properities
            const {
              strDrink: name,
              strDrinkThumb: image,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = res.data.drinks[0];
            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ];
            const newCocktail = {
              name,
              image,
              glass,
              instructions,
              ingredients,
            };
            setCocktail(newCocktail);
          } else {
            setCocktail(null);
          }
          setLoading(false);
        });
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="section cocktail-section">
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <br></br>
            <p>glass : {glass}</p>
            <p>instructions: {instructions}</p>
            <p>
              ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
        <div className="detailView-btn">
          <Link to="/" className="btn-primary">
            back home
          </Link>
        </div>
      </section>
    );
  }
}

export default SingleCocktail;
