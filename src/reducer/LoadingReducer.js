import { LOADING } from '../actions/testActions'


const LoadingReducer = (state=false, action) => {

    switch (action.type) {
        case LOADING:
            return {state :true}
            
    
        default:
            return state
    }

}
export default LoadingReducer
