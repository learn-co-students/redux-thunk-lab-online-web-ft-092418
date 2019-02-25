export function fetchCats () { //changing this off of export default to reg expert is what solved that final test (async actions). in App.js I then had to add the curly braces around the import fetchCats line
    return (dispatch) => { 
        dispatch({type: 'LOADING_CATS'})
        return fetch('http://localhost:4000/db')
            .then(resp => resp.json())
            .then(catData => dispatch({type: "FETCH_CATS", payload: catData.images}))
    }
}