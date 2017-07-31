export const UPDATE_BPM = 'update_bpm';
export const UPDATE_LOOPPOS = 'update_looppos';
export const UPDATE_ACTIVEPRESET = 'update_activepreset';
export const UPDATE_STEPS = 'update_steps';
export const UPDATE_ISPLAYING = 'update_isplaying';

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

export function updateSteps(steps) {
  return {
    type: UPDATE_STEPS,
    payload: steps
  }
}

export function updateIsPlaying(isPlaying) {
  return {
    type: UPDATE_ISPLAYING,
    payload: isPlaying
  }
}
