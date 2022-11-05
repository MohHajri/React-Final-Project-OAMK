import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="myGrid">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="*"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
