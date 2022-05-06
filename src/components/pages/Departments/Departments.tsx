import React, { useEffect, useState, useMemo } from 'react';

import DepartmentsAPI from '../../../API/Departments';
import { Department } from '../../../types/departments';
import AddButton from '../../AddButton/AddButton';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const getDepartments = async () => {
    try {
      const res = await DepartmentsAPI.getDepartments();

      setDepartments(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const departmentsList = useMemo(() => {
    return getDepartments();
  }, [departments]);

  useEffect(() => {}, [departmentsList]);

  return (
    <div>
      {departments.length > 0
        ? (
          <>
            <AddButton title="Add department " />
            <DepartmnetsList departments={departments} />
          </>
        )
        : <div>Departments not found</div>}
    </div>
  );
};

export default Departments;
