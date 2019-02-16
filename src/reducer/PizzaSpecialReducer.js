import { ADD_SPECIAL_PIZZA } from "../actions/action";


const PizzaSpecialReducer = (state=null, action)=> {
    switch (action.type) {
        
        case ADD_SPECIAL_PIZZA:
        let addSpecialPizza = action.payload
            return addSpecialPizza 
    
        default:
            return state
    }
}

export default PizzaSpecialReducer