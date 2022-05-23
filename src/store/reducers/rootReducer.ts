import { combineReducers } from 'redux';
import departmentsReducer from './departmentsReducer';

const rootReducer = combineReducers({
  departments: departmentsReducer
});

export default rootReducer;
