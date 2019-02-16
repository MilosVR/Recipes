import {ADD_TO_FAVORITE, DELETE_TO_FAVORITE } from '../actions/action'

const FavoriteReducer = (state=[],action) => {

    switch (action.type) {
       case ADD_TO_FAVORITE:
        return [...state, action.payload]

       case DELETE_TO_FAVORITE: 
        return [...state.filter(item => item.id !== action.payload.id)]

        default:
            return state
    }
}
export default FavoriteReducer