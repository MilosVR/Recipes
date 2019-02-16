import { FETCH_COCKTAIL } from '../../actions/testActions'


const RandomCocktail = (state=[], action) => {
    switch (action.type) {
        case FETCH_COCKTAIL:
        return action.payload
       
        default:
            return state;
    }
}

export default RandomCocktail