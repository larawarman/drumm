import { PLAY_STOP } from '../actions'

export default function(state = false, action) {
  switch (action.type) {
    case PLAY_STOP:
      return action.payload
    default:
      break;
  }

  return state;
}
