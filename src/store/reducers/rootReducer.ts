import { combineReducers } from 'redux';
import authReducer from './authReducer';
import departmentReducer from './departmentReducer';
import departmentsReducer from './departmentsReducer';
import modalsReducer from './modalsReducer';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  department: departmentReducer,
  auth: authReducer,
  modals: modalsReducer
});

export default rootReducer;
