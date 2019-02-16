import { ADD_PIZZA_INGRIDIENT, DELETE_PIZZA_INGREDIENT } from "../actions/action";
import { pizzaList } from '../PizzaMaker/pizzaJSON'


const PizzaReducer = (state=[], action) => {
    switch (action.type) {

        case ADD_PIZZA_INGRIDIENT:
        let pizza = [...state, pizzaList.find(item => item.id === action.payload.id)]
           return pizza
            
        case DELETE_PIZZA_INGREDIENT:
        let deletePizza = [...state.filter(item => item.id !== action.payload.id)]
            return deletePizza    

        default:
            return state
    }
}
export default PizzaReducer