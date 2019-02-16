import { SEARCH_COCKTAIL } from '../../actions/testActions'

export const cocktailReducer = ( state=[], action ) => {
    switch (action.type) {
        case SEARCH_COCKTAIL: 
            return action.payload
        default:
            return state
    }
}
