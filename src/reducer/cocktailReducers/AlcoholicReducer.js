import { ALCOHOL_COCKTAIL, LOADING } from "../../actions/testActions";

const initialState = {
    alcohol:[],
    loading:true
} 

export const  AlcoholicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALCOHOL_COCKTAIL:
            return { alcohol:{...action.payload}, loading:false}
        default:
            return state;
    }
}

export default AlcoholicReducer