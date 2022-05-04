import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DepartmentsAPI from '../../../API/Departments';
import { IDepartments } from '../../../types/departments';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<IDepartments>();

  const getDepartments = async () => {
    await DepartmentsAPI.getDepartments()
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDepartments();
  });

  return (
    <>
      <h1>Departments page</h1>
      {departments
        ? departments.data.map((department) => {
          return (
            <div key={department._id}>
              <Link to={`/departments/${department._id}`}>
                <div>{department.name}</div>
              </Link>
              <div>{department.description}</div>
            </div>
          );
        })
        : <div>404</div>}
    </>
  );
};

export default Departments;
