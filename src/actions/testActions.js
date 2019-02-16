import axiosCocktail from './axiosCocktail';
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const LOADING = "LOADING"
export const FETCH_USERS = "FETCH_USERS"
export const IS_LOADING = "IS_LOADING"
export const FETCH_COCKTAIL = "FETCH_COCKTAIL"
export const SEARCH_COCKTAIL = "SEARCH_COCKTAIL"
export const ALCOHOL_COCKTAIL = "ALCOHOL_COCKTAIL"


export const fetchingCocktail = (request) => {
    return {
        type : FETCH_COCKTAIL,  
        payload:request 
    }
}
export const loading = () => {
        return {
        type : LOADING,   
        }
    }

export const searchCocktail = (searchCocktail) => {
    return {
        type : SEARCH_COCKTAIL,  
        payload:searchCocktail 
    }
}
export const alcoholicCocktail = (alcohol) => {
    return {
        type : ALCOHOL_COCKTAIL,  
        payload:alcohol 
    }
}

export const fetchCocktail = () => async dispatch => {
    
    try {
        const request = await axiosCocktail.get('/random.php')
        dispatch(fetchingCocktail(request.data))
    }
    catch ( error ) {
        console.log(error)
    }
} 
export const searchFetchCocktail = (query) => async dispatch => {
    try{
        const request = await axiosCocktail.get('./search.php?s=' + query)
        dispatch(searchCocktail(request.data))
    }
    catch(error){
        console.log(error)
    }
}
export const fetchAlcoholicCocktail = () => async dispatch => {
    try {
        const request = await axiosCocktail.get('./filter.php?a=Alcoholic')
        dispatch(loading())
        dispatch(alcoholicCocktail(request.data))
        console.log(request.data);
        
    }
    catch(error) {
        console.log(error)
    }
}



    //export const increment = () => {
        //return {
        //type : INCREMENT,
        //payload : 1    
        //}
    //}
    //export const asyncIncrement = () => {
        //return dispatch => {
            //dispatch(loading())
            //setTimeout(() => {
                //dispatch(increment())
            //},2000)  
        //}
    //}
    //export const asyncDecrement = () => {
        //return dispatch => {
            //dispatch(loading())
            //setTimeout(() => {
                //dispatch(decrement())
            //},2000)  
        //}
    //}
    //export const decrement = () => {
        //return {
        //type : DECREMENT,
        //payload : 1    
        //}
    //}
    //export const loading = () => {
        //return {
        //type : LOADING,   
        //}
    //}
    //export const isLoading = () => {//
        //return {
        //type : IS_LOADING,   
        //}
    //}
    
    //export const fetchingUsers = (response) => {
        //return {
        //type : FETCH_USERS,  
        //payload:response 
        //}
    //}
    
    //export const fetchUsers = () => async dispatch => {
    
        //const response = await axiosBase.get('/users')
        //try{
            
        //dispatch(isLoading())
        //dispatch(fetchingUsers(response.data))
        //}
        //catch (err) {
           //console.error(err)
        //}
    //}
//const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query;