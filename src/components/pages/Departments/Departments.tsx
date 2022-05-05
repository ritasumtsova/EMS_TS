import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

import DepartmentsAPI from '../../../API/Departments';
import { IDepartment } from '../../../types/departments';
import AddButton from '../../AddButton/AddButton';
import EditButton from '../../EditButton/EditButton';
import './Departments.scss';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);

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
  }, [departments]);

  useEffect(() => {}, [departmentsList]);

  return (
    <>
      <AddButton title="Add department " />
      {departments.length > 0
        ? departments.map((department) => {
          return (
            <Row key={department._id} className="Departments">
              <Col>
                <span className="Departments__name">{`${department.name} department`}</span>
              </Col>
              <Col className="Departments__btn-wrapper">
                <Link to={`/departments/${department._id}`} className="Departments__btn--link">
                  <Button color="success">Employees</Button>
                </Link>
                <EditButton />
                <Button color="danger" disabled>Delete</Button>
              </Col>
            </Row>
          );
        })
        : <div>Departments not found</div>}
    </>
  );
};

export default Departments;
