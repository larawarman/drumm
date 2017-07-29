import { ACTIVATE_STEP } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case ACTIVATE_STEP:
      return action.payload
    default:
      break;
  }

  return state;
}
