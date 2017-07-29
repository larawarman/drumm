import { combineReducers } from 'redux';
import StepReducer from './reducer_steps';

const rootReducer = combineReducers({
  steps: StepReducer
});

export default rootReducer;
