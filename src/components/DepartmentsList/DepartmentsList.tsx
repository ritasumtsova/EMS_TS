import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

import { Department } from '../../types/components/departments';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import NotFound from '../pages/NotFound/NotFound';
import './DepartmentsList.scss';

interface DepartmentsListProps {
  departments: Department[];
}

const DepartmnetsList: React.FC<DepartmentsListProps> = ({ departments }) => {
  if (departments.length === 0) {
    return <NotFound />;
  }

  return (
    <div>
      {departments.map((department) => {
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
      })}
    </div>
  );
};

export default DepartmnetsList;
