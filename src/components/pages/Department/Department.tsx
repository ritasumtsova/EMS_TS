import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row } from 'reactstrap';

import { AppThunkDispatch } from '../../../types/store/appThunkTypes';
import { fetchDepartmentByIdThunk } from '../../../store/actionCreators/departmentActionCreators';
import { departmentsSelector } from '../../../store/selectors/departments';
import { loadingSelector } from '../../../store/selectors/loadingSelectors';

import AddButton from '../../AddButton/AddButton';
import EmployeeForm from '../../EmployeeForm/EmployeeForm';
import EmployeesList from '../../EmployeesList/EmployeesList';
import NotFound from '../NotFound/NotFound';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

import './Department.scss';

const DepartmentPage: React.FC = () => {
  const { id } = useParams();

  const { departmentById } = useSelector(departmentsSelector);
  const { department } = departmentById;
  const { loading, errorMessage } = useSelector(loadingSelector);

  const dispatch = useDispatch<AppThunkDispatch>();

  const departmentInfo = useMemo(() => {
    return dispatch(fetchDepartmentByIdThunk(id!));
  }, []);

  useEffect(() => {}, [departmentInfo]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <NotFound errorMessage={errorMessage}/>;
  }

  return (
    <>
      <AddButton
        modalForm={<EmployeeForm />}
        title="Add employee "
        name="Add employee" 
        submitHandler={() => {}} 
      />
      <Row className="Department">
        <h2>{department?.description}</h2>
        <EmployeesList employees={department?.employees || []} />
      </Row>
    </>
  );
};

export default DepartmentPage;
