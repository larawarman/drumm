import { UPDATE_ACTIVEPRESET } from '../actions'

export default function(state = 0, action) {
  switch (action.type) {
    case UPDATE_ACTIVEPRESET:
      return action.payload
    default:
      break;
  }

  return state;
}
