import { UPDATE_LOOPPOS } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_LOOPPOS:
      return action.payload
    default:
      break;
  }

  return state;
}
