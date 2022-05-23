import { combineReducers } from 'redux';
import authReducer from './authReducer';
import departmentReducer from './departmentReducer';
import departmentsReducer from './departmentsReducer';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  department: departmentReducer,
  auth: authReducer
});

export default rootReducer;
