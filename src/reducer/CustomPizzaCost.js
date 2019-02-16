
import { ADD_PIZZA_COST, DELETE_PIZZA_COST } from "../actions/action";
import { pizzaList } from '../PizzaMaker/pizzaJSON'


const CustomPizzaCost = (state=0, action) => {
    switch (action.type) {

        case ADD_PIZZA_COST:
        let pizza = pizzaList.find(item => item.id === action.payload.id)
        let cost = state += pizza.cost
           return cost
            
        case DELETE_PIZZA_COST:
        pizza = pizzaList.find(item => item.id === action.payload.id)
        cost = state -= pizza.cost
            return cost
        default:
            return state
    }
}
export default CustomPizzaCost