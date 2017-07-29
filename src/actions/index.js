export const ACTIVATE_STEP = 'activate_step';

export function activateStep(step) {
  return {
    type: ACTIVATE_STEP,
    payload: step
  };
}
