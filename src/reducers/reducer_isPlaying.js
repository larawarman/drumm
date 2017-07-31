import { UPDATE_ISPLAYING } from '../actions'

export default function(state = false, action) {
  switch (action.type) {
    case UPDATE_ISPLAYING:
      return action.payload
    default:
      break;
  }

  return state;
}
