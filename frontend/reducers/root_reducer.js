import errorsReducer from './errors_reducer';
import  entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    modal: modalReducer
})

export default RootReducer;