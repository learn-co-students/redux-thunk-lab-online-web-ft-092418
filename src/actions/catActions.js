export function fetchCats() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
      return fetch('http://localhost:4000/db')
        .then(response => response.json())
        // .then(cats => console.log(cats));
        .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images })
    )};
}

// export function fetchCats() {
//     return (dispatch) => {
//         dispatch({type: 'LOADING_CATS'});
//     return fetch('http://localhost:4000/db')
//         .then(response => response.json())
//         .then(catsJSON => {
//             const cats = catsJSON.images;
//             dispatch({type: 'FETCH_CATS', payload: cats})
//         })
//     };
// }

//   export function createTodo(todo) {
//     return dispatch => {
//       dispatch({type: "LOADING"})
//       return fetch('http://localhost:5000/todos', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ todo })
//       }).then(res => res.json())
//       .then(data => dispatch({type: "CREATE TODO", payload: data}))
//     }
//   }
  
//   export function getTodos(todo) {
//     return dispatch => {
//       dispatch({type: "LOADING"})
//       return fetch('http://localhost:5000/todos')
//       .then(res => res.json())
//       .then(data => dispatch({type: "GET TODOS", payload: data}))
//     }
//   }
  