import React, { useEffect, useState, useMemo, useContext } from 'react';

import DepartmentsAPI from '../../../API/Departments';
import { Department } from '../../../types/departments';
import AddButton from '../../AddButton/AddButton';
import NotFound from '../NotFound/NotFound';
import DepartmnetsList from '../../DepartmentsList/DepartmentsList';
import DepartmentForm from '../../DepartmentForm/DepartmentForm';
import LoaderContext from '../../../contexts/Loader/LoaderContext';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const loaderContext = useContext(LoaderContext);

  const getDepartments = async () => {
    loaderContext!.toggleLoader(loaderContext!.isLoading);

    try {
      const res = await DepartmentsAPI.getDepartments();

      setDepartments(res.data.data);
    } catch (err) {
      console.error(err);
    }

    loaderContext!.toggleLoader(loaderContext!.isLoading);
  };

  const departmentsList = useMemo(() => {
    return getDepartments();
  }, [setDepartments]);

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
