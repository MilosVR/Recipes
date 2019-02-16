import { ADD_RECIPE, EDIT_RECIPE } from "../actions/action";
import {DataJson} from '../DataJson.js/DataJson'


const RecipeReducer = (state=DataJson, action) => {
  
    switch (action.type) {
      
      case ADD_RECIPE:
        let addRecipe = [...state, action.payload];
        return addRecipe

      case EDIT_RECIPE:
      let editRecipe = state.map(recipe => recipe.id === action.payload.id ? action.payload : recipe )
        return editRecipe  
        
      default:  
        return state
    }
}

export default RecipeReducer