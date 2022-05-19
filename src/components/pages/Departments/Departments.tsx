import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';
import { AppThunkDispatch, rootState } from '../../../types/store/generalStateTypes';
import { fetchDepartmentsThunk } from '../../../store/actionCreators/departmentsActionCreators';

const Departments: React.FC = () => {
  const departments = useSelector((state: rootState) => state.departments.departments?.data);
  const errMsg = useSelector((state: rootState) => state.departments.errorMsg);
  // const loading = useSelector((state: rootState) => state.departments.loading);

  const dispatch = useDispatch<AppThunkDispatch>();

  const departmentsList = useMemo(() => {
    return dispatch(fetchDepartmentsThunk());
  }, [departments]);

  useEffect(() => {}, [departmentsList]);

  if (errMsg) {
    return <NotFound errMsg={errMsg}/>;
  }

  return (
    <>
      <AddButton title="Add department " modalForm={<DepartmentForm />} />
      <DepartmnetsList departments={departments || []} />
    </>
  );
};

export default Departments;
