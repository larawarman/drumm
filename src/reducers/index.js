import { combineReducers } from 'redux';
import Steps from './reducer_steps';
import ActiveStep from './reducer_activeStep';
import Bpm from './reducer_bpm';
import PlayStop from './reducer_playStop';
import UpdateLoopPos from './reducer_loopPos';

const rootReducer = combineReducers({
  steps: Steps,
  activeStep: ActiveStep,
  bpm: Bpm,
  isPlaying: PlayStop,
  loopPos: UpdateLoopPos
});

export default rootReducer;
