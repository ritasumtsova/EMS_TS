import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import DepartmentsAPI from '../../../API/Departments';
import { IDepartment } from '../../../types/departments';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<IDepartment[]>();

  const getDepartments = async () => {
    try {
      const res = await DepartmentsAPI.getDepartments();

      setDepartments(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const departmentsList = useMemo(() => {
    return getDepartments();
  }, [])

  useEffect(() => {}, [departmentsList]);

  return (
    <>
      <h1>Departments page</h1>
      {departments
        ? departments.map((department) => {
          return (
            <div key={department._id}>
              <Link to={`/departments/${department._id}`}>
                <div>{department.name}</div>
              </Link>
              <div>{department.description}</div>
            </div>
          );
        })
        : <div>Departments not found</div>}
    </>
  );
};

export default Departments;
