import { IS_SIGN_IN_GOOGLE, IS_SIGN_OUT_GOOGLE } from "../actions/action";

const initialState = {
    isGoogleSignIn:null,
    userGoogle:null
}

export const GoogleReducer = (state=initialState, action) => {
    switch (action.type) {
        case IS_SIGN_IN_GOOGLE:
            return {...state, isGoogleSignIn:true, userGoogle:action.payload}
        case IS_SIGN_OUT_GOOGLE:
            return {...state, isGoogleSignIn:false, userGoogle:null}
        default:
            return state
    }
}