import { combineReducers } from 'redux';
import Steps from './reducer_steps';
import Bpm from './reducer_bpm';
import UpdateLoopPos from './reducer_loopPos';
import ActivePreset from './reducer_activePreset';
import IsPlaying from './reducer_isPlaying';

const rootReducer = combineReducers({
  steps: Steps,
  bpm: Bpm,
  loopPos: UpdateLoopPos,
  activePreset: ActivePreset,
  isPlaying: IsPlaying,
});

export default rootReducer;
