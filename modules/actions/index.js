export const sayHello = () => {
  return dispatch => {
    fetch('http://localhost:8080/api/hello')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'GOT_HELLO',
          payload: json
        })
      })
  }
}
