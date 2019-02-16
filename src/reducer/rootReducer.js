import { combineReducers } from 'redux'
import RecipeReducer from './RecipeReducer'
import { reducer as FormReducer } from 'redux-form'
import PizzaReducer from './PizzaReducer';
import PizzaSpecialReducer from './PizzaSpecialReducer';
import CustomPizzaCost from './CustomPizzaCost';
import FavoriteReducer from './FavoriteReducer'
import AuthReducer from './AuthReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { GoogleReducer } from './GoogleReducer';
import TestReducer from './TestReducer';
import { usersReducer } from './usersReducer';
import { cocktailReducer } from './cocktailReducers/cocktailReducer';
import AlcoholicReducer from './cocktailReducers/AlcoholicReducer';
import RandomCocktail from './cocktailReducers/RandomCocktail';


const rootReducer = combineReducers({
    recipe : RecipeReducer,
    pizza : PizzaReducer,
    form : FormReducer,
    specialPizza : PizzaSpecialReducer,
    pizzaCost : CustomPizzaCost,
    favorite : FavoriteReducer,
    user : AuthReducer,
    toastr : toastrReducer,
    googleAuth : GoogleReducer,
    test : TestReducer,
    users : usersReducer,
    cocktail : cocktailReducer,
    alcohol : AlcoholicReducer,
    randomCocktail : RandomCocktail
})

export default rootReducer