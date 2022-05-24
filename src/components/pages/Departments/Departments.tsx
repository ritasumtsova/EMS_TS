import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppThunkDispatch } from '../../../types/store/appThunkTypes'
import { fetchDepartmentsThunk, addDepartmentThunk } from '../../../store/actionCreators/thunks/departmentsThunks';
import { departmentsSelector } from '../../../store/selectors/departments';

import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const Departments: React.FC = () => {
  const {
    departmentsInfo:
      {
        loading,
        departments,
        errorMessage
      }
  } = useSelector(departmentsSelector);

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
      <AddButton title="Add department " modalForm={<DepartmentForm />} submitHandler={addDepartmentThunk} />
      <DepartmnetsList departments={departments?.data || []} />
    </>
  );
};

export default Departments;
