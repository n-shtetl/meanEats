export const RECEIVE_STEPS = "RECEIVE_STEPS";
import * as StepApiUtil from '../util/step_api_util';

const receiveSteps = (steps) => ({
    type: RECEIVE_STEPS,
    steps
})

export const fetchSteps = (stepId) => dispatch => {
    return StepApiUtil.fetchSteps(stepId)
        .then(steps => dispatch(receiveSteps(steps)))
}