export default function catsReducer (state = {
    pictures: [],
    loading: false
}, action) {
    switch(action.type) {
        case "LOADING_CATS":
            return {loading: true, pictures: [...state.pictures] } 
        case "FETCH_CATS": 
            return {...state, pictures: action.payload, loading: false}
        default: 
            return state
    }
}