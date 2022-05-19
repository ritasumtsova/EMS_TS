import { combineReducers } from 'redux';
import departmentReducer from './departmentReducer';
import departmentsReducer from './departmentsReducer';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  department: departmentReducer
});

export default rootReducer;
