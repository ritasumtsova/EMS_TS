import { combineReducers } from 'redux';
import authReducer from './authReducer';
import departmentReducer from './departmentReducer';
import departmentsReducer from './departmentsReducer';
import modalsReducer from './modalsReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  departments: departmentsReducer,
  department: departmentReducer,
  auth: authReducer,
  modals: modalsReducer,
  loading: loadingReducer
});

export default rootReducer;
