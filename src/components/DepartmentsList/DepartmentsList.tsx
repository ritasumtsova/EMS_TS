import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

import { Department } from '../../types/departments';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import './DepartmentsList.scss';

interface DepartmentsListProps {
  departments: Department[];
}

const DepartmnetsList: React.FC<DepartmentsListProps> = ({ departments }) => {
  return (
    <div>
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
                <DeleteButton />
              </Col>
            </Row>
          );
        })
        : <div>Departments not found</div>}
    </div>
  );
};

export default DepartmnetsList;
