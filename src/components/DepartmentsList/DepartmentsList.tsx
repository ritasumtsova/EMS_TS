import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';

import { Department } from '../../types/components/departments';
import { modalNames, modalTitles } from '../../types/components/modals';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import EditDepartmentForm from '../EditDepartmentForm/EditDepartmentForm';
import NotFound from '../pages/NotFound/NotFound';
import Paginator from '../Paginator/Paginator';
import SearchForm from '../SearchForm/SearchForm';
import './DepartmentsList.scss';

interface DepartmentsListProps {
  departments: Department[];
}

const DepartmnetsList: React.FC<DepartmentsListProps> = ({ departments }) => {
  if (departments.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <SearchForm />
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
                <EditButton
                  name={modalNames.EDIT_DEPARTMENT}
                  title={modalTitles.EDIT_DEPARTMENT}
                  modalForm={<EditDepartmentForm />}
                  departmentId={department._id!}
                />
                <DeleteButton
                  name={modalNames.DELETE_DEPARTMENT}
                  title={modalTitles.DELETE_DEPARTMENT}
                  modalForm={<ConfirmModal />}
                  departmentId={department._id!}
                />
              </Col>
            </Row>
          );
        })}
      </div>
      <Paginator />
    </>
  );
};

export default DepartmnetsList;
