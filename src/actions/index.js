export const ACTIVATE_STEP = 'activate_step';
export const UPDATE_BPM = 'update_bpm';
export const PLAY_STOP = 'play_stop';
export const UPDATE_LOOPPOS = 'update_looppos';
export const UPDATE_ACTIVEPRESET = 'update_activepreset';

export function activateStep(step) {
  return {
    type: ACTIVATE_STEP,
    payload: step
  };
}

export function updateBpm(bpm) {
  return {
    type: UPDATE_BPM,
    payload: bpm
  }
}

export function updateLoopPos(loopPos) {
  return {
    type: UPDATE_LOOPPOS,
    payload: loopPos
  }
}

export function updateActivePreset(activePreset) {
  return {
    type: UPDATE_ACTIVEPRESET,
    payload: activePreset
  }
}
