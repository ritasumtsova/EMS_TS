import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row } from 'reactstrap';
import AddButton from '../../AddButton/AddButton';
import EmployeeForm from '../../EmployeeForm/EmployeeForm';
import EmployeesList from '../../EmployeesList/EmployeesList';
import NotFound from '../NotFound/NotFound';
import { AppThunkDispatch, rootState } from '../../../types/store/generalStateTypes';
import { fetchDepartmentThunk } from '../../../store/actionCreators/departmentActionCreators';
import './Department.scss';

const DepartmentPage: React.FC = () => {
  const { id } = useParams();
  const description = useSelector((state: rootState) => state.department.department?.description);
  const employees = useSelector((state: rootState) => state.department.department?.employees);
  const errMsg = useSelector((state: rootState) => state.department.errorMsg);
  // const loading = useSelector((state: rootState) => state.departments.loading);

  const dispatch = useDispatch<AppThunkDispatch>();

  const departmentInfo = useMemo(() => {
    return dispatch(fetchDepartmentThunk(id!));
  }, [id]);

  useEffect(() => {}, [departmentInfo]);

  if (errMsg) {
    return <NotFound errMsg={errMsg}/>;
  }

  return (
    <>
      <AddButton modalForm={<EmployeeForm />} title="Add employee " />
      <Row className="Department">
        <h2>{description}</h2>
        <EmployeesList employees={employees || []} />
      </Row>
    </>
  );
};

export default DepartmentPage;
