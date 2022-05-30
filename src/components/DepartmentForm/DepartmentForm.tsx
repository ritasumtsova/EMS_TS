import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'reactstrap';

import {
  changeDepartmentName,
  changeDepartmentDescripton
} from '../../store/actionCreators/formsActionCreators';
import './DepartmentForm.scss';

const DepartmentForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Form className="DepartmentForm">
      <Input
        className="DepartmentForm__input"
        type="text"
        placeholder="Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(changeDepartmentName(e.target.value));
        }}
      />
      <Input
        className="DepartmentForm__input"
        type="text"
        placeholder="Description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(changeDepartmentDescripton(e.target.value));
        }}
      />
    </Form>
  );
};

export default DepartmentForm;
