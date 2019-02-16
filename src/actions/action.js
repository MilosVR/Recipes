export const ADD_RECIPE = "ADD_RECIPE"
export const ADD_PIZZA_INGRIDIENT = "ADD_PIZZA_INGRIDIENT"
export const DELETE_PIZZA_INGREDIENT = "DELETE_PIZZA_INGREDIENT"
export const ADD_SPECIAL_PIZZA = "ADD_SPECIAL_PIZZA"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const ADD_PIZZA_COST = "ADD_PIZZA_COST"
export const DELETE_PIZZA_COST = "DELETE_PIZZA_COST"
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const DELETE_TO_FAVORITE = "DELETE_TO_FAVORITE"
export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const IS_SIGN_IN_GOOGLE = "IS_SIGN_IN_GOOGLE"
export const IS_SIGN_OUT_GOOGLE = "IS_SIGN_OUT_GOOGLE"


export const addRecipe = ( recipe ) => {
    
    return {
        type:ADD_RECIPE,
        payload:recipe
    }
}

export const addPizzaIngridient = ( pizzaIngridient ) =>{

    return {
        type:ADD_PIZZA_INGRIDIENT,
        payload:pizzaIngridient
    }
}
export const deletePizzaIngridient = ( pizzaIngridient ) =>{

    return {
        type:DELETE_PIZZA_INGREDIENT,
        payload:pizzaIngridient
    }
}
export const addSpecialPizza = ( addSpecialPizza) =>{

    return {
        type:ADD_SPECIAL_PIZZA,
        payload:addSpecialPizza,
    }
}
export const editRecipe = recipe => {

    return {
        type : EDIT_RECIPE, 
        payload : recipe
    }
}

export const addPizzaCost = ( pizzaIngridient ) =>{

    return {
        type:ADD_PIZZA_COST,
        payload:pizzaIngridient
    }
}
export const removePizzaCost = ( pizzaIngridient ) =>{

    return {
        type:DELETE_PIZZA_COST,
        payload:pizzaIngridient
    }
}
export const addToFavorite = (favorite) => {
    
    return {
        type:ADD_TO_FAVORITE, 
        payload:favorite
    }
}
export const deleteToFavorite = (favorite) => {
    
    return {
        type:DELETE_TO_FAVORITE, 
        payload:favorite
    }
}

export const logIn = (user) => {
    return {
        type:LOG_IN,
        payload:user,
    }
}
export const logOut = (user) => {
    return {
        type:LOG_OUT,
        payload:user,
    };
}
export const googleSignIn = (user) => {
    return { 
        type: IS_SIGN_IN_GOOGLE, 
        payload:user
    }
}
export const googleSignOut = (logOutUser) => {
    return { 
        type : IS_SIGN_OUT_GOOGLE,
        payload:logOutUser 
    }
}
