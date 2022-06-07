import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  Col,
  Button,
} from 'reactstrap';
import { getDepartmentsByName } from '../../store/actionCreators/departmentsActionCreators';

import './SearchForm.scss';

const SearchForm: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const searchDepartments = () => {
    dispatch(getDepartmentsByName(name));
  };

  return (
    <Form className="SearchForm" onSubmit={searchDepartments}>
      <Col xs="8">
        <Input
          className="SearchForm__input"
          type="text"
          placeholder="Enter department`s name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </Col>
      <Col className="SearchForm__btn-wrapper" xs="4">
        <Button
          className="SearchForm__btn-button"
          color="primary"
        >
          Search
        </Button>
      </Col>
    </Form>
  );
};

export default SearchForm;
