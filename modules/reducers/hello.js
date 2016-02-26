export default function (state = {}, action) {
  switch (action.type) {
    case 'GOT_HELLO':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
