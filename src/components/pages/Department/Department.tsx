import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DepartmentsAPI from '../../../API/Departments';
import { IEmployee } from '../../../types/employees';

const Department: React.FC = () => {
  const { id } = useParams();
  const [employees, setEmployees] = useState<IEmployee[]>();

  const getDepartmentInfo = async () => {
    if (id) {
      await DepartmentsAPI.getDepartmentInfo(id)
        .then((res) => {
          setEmployees(res.data.employees);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getDepartmentInfo();
  });

  return (
    <>
      <h1>Department page</h1>
      {employees
        ? employees.map((employee) => {
          return (
            <div key={employee._id}>
              <div>{employee.firstName}</div>
              <div>{employee.lastName}</div>
            </div>
          );
        })
        : <div>Employees not found</div>}
    </>
  );
};

export default Department;
