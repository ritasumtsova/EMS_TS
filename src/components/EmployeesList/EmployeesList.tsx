import React from 'react';
import { Col, Container } from 'reactstrap';

import { Employee } from '../../types/components/employees';
import { modalNames, modalTitles } from '../../types/components/modals';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import EditEmployeeForm from '../EditEmployeeForm/EditEmployeeForm';
import NotFound from '../pages/NotFound/NotFound';
import './EmployeesList.scss';

interface EmployeesListProps {
  employees: Employee[];
  departmentId: string;
}

const EmployeesList: React.FC<EmployeesListProps> = ({ departmentId, employees }) => {
  if (employees.length === 0) {
    return <NotFound />;
  }

  return (
    <Container className="EmployeesList__info-wrapper">
      {employees.map((employee) => {
        return (
          <React.Fragment key={employee._id}>
            <Col>
              <div>{employee.firstName}</div>
              <div>{employee.lastName}</div>
            </Col>
            <Col className="EmployeesList__info-wrapper-btn">
              <EditButton
                name={modalNames.EDIT_EMPLOYEE}
                title={modalTitles.EDIT_EMPLOYEE}
                modalForm={<EditEmployeeForm />}
                employeeId={employee._id}
                departmentId={departmentId}
              />
              <DeleteButton />
            </Col>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default EmployeesList;
