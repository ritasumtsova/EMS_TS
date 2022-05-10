import React from 'react';
import { Form, Input } from 'reactstrap';

import './DepartmentForm.scss';

const DepartmentForm: React.FC = () => {
  return (
    <Form className="DepartmentForm">
      <Input className="DepartmentForm__input" type="text" placeholder="Name" />
      <Input className="DepartmentForm__input" type="text" placeholder="Description" />
    </Form>
  );
};

export default DepartmentForm;
