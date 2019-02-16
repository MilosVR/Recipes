import { LOG_IN, LOG_OUT } from '../actions/action'


const AuthReducer = (state = null, action) => {
    switch (action.type) {
        case LOG_IN:
        return action.payload

        case LOG_OUT:        
        return state;
        
        default:
            return state;
    }
}
export default AuthReducer