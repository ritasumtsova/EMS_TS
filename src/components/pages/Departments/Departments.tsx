import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';
import { AppThunkDispatch } from '../../../types/store/appThunkTypes'
import { fetchDepartmentsThunk } from '../../../store/actionCreators/thunks/departmentsThunks';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { departmentsSelector } from '../../../store/selectors/departments';

const Departments: React.FC = () => {
  const { departments, errorMessage, loading } = useSelector(departmentsSelector);

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
