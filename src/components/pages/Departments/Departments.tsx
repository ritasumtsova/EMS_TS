import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDepartments, addDepartment } from '../../../store/actionCreators/departmentsActionCreators';
import { departmentsSelector } from '../../../store/selectors/departments';
import { loadingSelector } from '../../../store/selectors/loadingSelectors';

import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';
import { modalNames, modalTitles } from '../../../types/components/modals';

const Departments: React.FC = () => {
  const { departmentsInfo } = useSelector(departmentsSelector);
  const { departments } = departmentsInfo;
  const { loading, errorMessage } = useSelector(loadingSelector);

  const dispatch = useDispatch();

  const departmentsList = useMemo(() => {
    return dispatch(getDepartments());
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
      <AddButton
        submitHandler={addDepartment}
        name={modalNames.ADD_DEPARTMENT}
        title={modalTitles.ADD_DEPARTMENT}
        modalForm={<DepartmentForm />}
      />
      <DepartmnetsList departments={departments?.data || []} />
    </>
  );
};

export default Departments;
