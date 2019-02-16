export const ADD_VALUES = "ADD_VALUES"
export const EDIT_VALUES = "EDIT_VALUES"

export const addValues = (values) => {
    return {
        type : ADD_VALUES,
        payload : values
    }
}
export const editValues = (editValues) => {
    return {
        type : EDIT_VALUES,
        payload : editValues
    }
}