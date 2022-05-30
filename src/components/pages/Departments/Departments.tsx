import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppThunkDispatch } from '../../../types/store/appThunkTypes'
import { fetchDepartmentsThunk } from '../../../store/actionCreators/departmentsActionCreators';
import { departmentsSelector } from '../../../store/selectors/departments';
import { loadingSelector } from '../../../store/selectors/loadingSelectors';

import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const Departments: React.FC = () => {
  const { departmentsInfo } = useSelector(departmentsSelector);
  const {  departments } = departmentsInfo;
  const { loading, errorMessage } = useSelector(loadingSelector);

  const dispatch = useDispatch<AppThunkDispatch>();

  const departmentsList = useMemo(() => {
    return dispatch(fetchDepartmentsThunk());
  }, []);

  useEffect(() => {}, [departmentsList]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <NotFound errorMessage={errorMessage}/>;
  }

  return (
    <>
      <AddButton title="Add department " modalForm={<DepartmentForm />} />
      <DepartmnetsList departments={departments?.data || []} />
    </>
  );
};

export default Departments;
