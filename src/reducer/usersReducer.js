import { FETCH_USERS, IS_LOADING } from "../actions/testActions";

const initialState = {data:[], isLoading:false}

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {data:[...action.payload], isLoading:false}    

        case IS_LOADING:
            return {...state, isLoading:true}
        default:
            return state
    }
}
