import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';

import DepartmentsAPI from '../../../API/Departments';
import { IEmployee } from '../../../types/employees';
import { IDepartment } from '../../../types/departments';
import './Department.scss';
import AddButton from '../../AddButton/AddButton';
import EditButton from '../../EditButton/EditButton';

const Department: React.FC = () => {
  const { id } = useParams();
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [department, setDepartment] = useState<IDepartment>();

  const getDepartmentInfo = async () => {
    try {
      const res = await DepartmentsAPI.getDepartmentInfo(id!);
      setDepartment(res.data);
      setEmployees(res.data.employees!);
    } catch (err) {
      console.log(err);
    }
  };

  const departmentInfo = useMemo(() => {
    return getDepartmentInfo();
  }, [id]);

  useEffect(() => {}, [departmentInfo]);

  return (
    <>
      <AddButton title="Add employee " />
      <Row className="Department">
        <h2>{department?.description}</h2>
        <Container className="Department__info-wrapper">
          {employees.length > 0
            ? employees.map((employee) => {
              return (
                <React.Fragment key={employee._id}>
                  <Col>
                    <div>{employee.firstName}</div>
                    <div>{employee.lastName}</div>
                  </Col>
                  <Col className="Department__info-wrapper-btn">
                    <EditButton />
                    <Button color="danger" disabled>
                      Delete
                    </Button>
                  </Col>
                </React.Fragment>
              );
            })
            : <div>Employees not found</div>}
        </Container>
      </Row>
    </>
  );
};

export default Department;
