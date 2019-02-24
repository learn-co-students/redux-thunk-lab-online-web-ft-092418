
export function fetchCats(){
  return (dispatch) => {
    dispatch({type: "LOADING_CATS"})
    return fetch("http://www.localhost:4000/db")
    .then(resp => resp.json())
    .then(cats => dispatch({ type: "FETCH_CATS", cats}))
  }
}
