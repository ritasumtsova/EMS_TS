import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'reactstrap';

import DepartmentsAPI from '../../../API/Departments';
import LoaderContext from '../../../contexts/Loader/LoaderContext';
import { Department } from '../../../types/departments';
import AddButton from '../../AddButton/AddButton';
import EmployeeForm from '../../EmployeeForm/EmployeeForm';
import EmployeesList from '../../EmployeesList/EmployeesList';
import NotFound from '../NotFound/NotFound';
import './Department.scss';

const DepartmentPage: React.FC = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState<Department>();

  const loaderContex = useContext(LoaderContext);

  const getDepartmentInfo = async () => {
    loaderContex!.toggleLoader(loaderContex!.isLoading);

    try {
      const res = await DepartmentsAPI.getDepartmentInfo(id!);

      setDepartment(res.data);
    } catch (err) {
      console.error(err);
    }

    loaderContex!.toggleLoader(loaderContex!.isLoading);
  };

  const departmentInfo = useMemo(() => {
    return getDepartmentInfo();
  }, [id]);

  useEffect(() => {}, [departmentInfo]);

  if (!department) {
    return <NotFound />;
  }

  return (
    <>
      <AddButton modalForm={<EmployeeForm />} title="Add employee " />
      <Row className="Department">
        <h2>{department.description}</h2>
        <EmployeesList employees={department.employees || []} />
      </Row>
    </>
  );
};

export default DepartmentPage;
