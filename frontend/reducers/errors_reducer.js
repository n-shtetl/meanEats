import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import tagsErrorsReducer from './tags_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    tags: tagsErrorsReducer
})

export default errorsReducer;