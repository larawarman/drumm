export const ACTIVATE_STEP = 'activate_step';
export const UPDATE_BPM = 'update_bpm';

export function activateStep(step) {
  return {
    type: ACTIVATE_STEP,
    payload: step
  };
}

export function updateBpm(bpm){
  return {
    type: UPDATE_BPM,
    payload: bpm
  }
}
