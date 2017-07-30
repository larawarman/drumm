import { UPDATE_BPM } from '../actions'

export default function(state = 60, action) {
  switch (action.type) {
    case UPDATE_BPM:
      return action.payload
    default:
      break;
  }

  return state;
}
