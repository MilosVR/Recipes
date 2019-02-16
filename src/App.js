import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateNewRecipe from "./RecipeComponents/CreateNewRecipe";
import Home from './MenuPage/Home'
import RecipeDetails from "./RecipeComponents/RecipeDetails";
import SearchResult from './SearchResult'
import AllRecipes from './RecipeComponents/AllRecipe'
import PizzaMaker from './PizzaMaker/PizzaMaker'
import EditRecipe from './RecipeComponents/EditRecipe'
import Cocktail from './Cocktail/Cocktail'
import Favorite from "./MenuPage/Favorite";
import AllRecipeByCategory from './RecipeComponents/AllRecipeByCategory'
import SearchCocktails from './Cocktail/SearchCocktails'
import AlcoholicCocktail from './Cocktail/AlcoholicCocktail'
import Test from './Test'
import TestEdit from './TestEdit'
import TestButton from './other/test'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/recipe' component={CreateNewRecipe} />
            <Route path='/details/:id' component={RecipeDetails} />
            <Route path='/search/:title' component={SearchResult} />
            <Route path='/allRecipe' component={AllRecipeByCategory} />
            <Route path='/PizzaMaker' component={PizzaMaker} />
            <Route path='/edit/:id' component={EditRecipe} />
            <Route path="/cocktail" component={Cocktail} />
            <Route path="/favorite" component={Favorite} />
            <Route path='/searchCocktails' component={SearchCocktails}/>
            <Route path='/alcoholCocktails' component={AlcoholicCocktail}/>
            <Route path='/test' component={Test}/>
            <Route path='/testButton' component={TestButton}/>
            <Route path='/testEdit/:id' component={TestEdit}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
