import { RECEIVE_STEPS } from '../actions/step_actions';

const stepsReducer = (oldState = {}, action) => {
   
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_STEPS:
            return action.steps;
        default:
            return oldState;
    }
}

export default stepsReducer;