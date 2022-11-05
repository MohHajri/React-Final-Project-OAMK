import React from "react";
import { useState, useEffect } from "react";
import CocktailsList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        .then((res) => {
          const data = res.data.drinks;
          if (data) {
            const newCocktails = data.map((item) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              } = item;
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              };
            });
            setCocktails(newCocktails);
          } else {
            setCocktails([]);
          }
          setLoading(false);
        });
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <>
      <div className="myContainer">
        <main>
          <SearchForm setSearchTerm={setSearchTerm} />
          <CocktailsList loading={loading} cocktails={cocktails} />
        </main>
      </div>
      <div className="myFooter">
        <p> done by Hajri</p>
      </div>
    </>
  );
}
export default Home;
