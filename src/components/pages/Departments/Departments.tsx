import React, { useEffect, useState, useMemo } from 'react';

import DepartmentsAPI from '../../../API/Departments';
import { Department } from '../../../types/departments';
import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const getDepartments = async () => {
    try {
      const res = await DepartmentsAPI.getDepartments();

      setDepartments(res.data.data);
    } catch (err) {
      // console.error(err);
    }
  };

  const departmentsList = useMemo(() => {
    return getDepartments();
  }, [departments]);

  useEffect(() => {}, [departmentsList]);

  if (!departments) {
    return <NotFound />;
  }

  return (
    <>
      <AddButton title="Add department " modalForm={<DepartmentForm />} />
      <DepartmnetsList departments={departments || []} />
    </>
  );
};

export default Departments;
