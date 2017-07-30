import { combineReducers } from 'redux';
import Steps from './reducer_steps';
import ActiveStep from './reducer_activeStep';
import Bpm from './reducer_bpm';
import UpdateLoopPos from './reducer_loopPos';

const rootReducer = combineReducers({
  steps: Steps,
  activeStep: ActiveStep,
  bpm: Bpm,
  loopPos: UpdateLoopPos
});

export default rootReducer;
