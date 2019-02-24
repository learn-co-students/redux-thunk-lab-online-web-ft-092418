export default function catReducer(state = [], action) {
  switch(action.type){
    case "LOADING_CATS":
      return state
    case "FETCH_CATS":
      return [...action.cats.images]
    default:
    return state
  }
}
