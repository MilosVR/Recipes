import { DataJson } from "../DataJson.js/DataJson";
import { ADD_VALUES, EDIT_VALUES } from "../TestActions/actions";


const initialState = DataJson 


const TestReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_VALUES:
        return [...state, action.payload]

        case EDIT_VALUES:
        let editRecipe = state.map(recipe => recipe.id === action.payload.id ? action.payload : recipe )
        return editRecipe  

        default:
            return state
    }
}
export default TestReducer