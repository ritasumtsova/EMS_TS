import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'reactstrap';

import DepartmentsAPI from '../../../API/Departments';
import { Department } from '../../../types/departments';
import AddButton from '../../AddButton/AddButton';
import EmployeesList from '../../EmployeesList/EmployeesList';
import './Department.scss';

const DepartmentPage: React.FC = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState<Department>();

  const getDepartmentInfo = async () => {
    try {
      const res = await DepartmentsAPI.getDepartmentInfo(id!);

      setDepartment(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const departmentInfo = useMemo(() => {
    return getDepartmentInfo();
  }, [id]);

  useEffect(() => {}, [departmentInfo]);

  return (
    <div>
      {department
        ? (
          <>
            <AddButton title="Add employee " />
            <Row className="Department">
              <h2>{department.description}</h2>
              <EmployeesList employees={department.employees!} />
            </Row>
          </>
        )
        : <h1>smth went wrong</h1>}
    </div>
  );
};

export default DepartmentPage;
