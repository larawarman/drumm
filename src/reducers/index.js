import { combineReducers } from 'redux';
import StepReducer from './reducer_steps';
import ActiveStep from './reducer_activeStep';

const rootReducer = combineReducers({
  steps: StepReducer,
  activeStep: ActiveStep
});

export default rootReducer;
