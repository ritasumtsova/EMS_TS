import React from 'react';
import { Form, Input } from 'reactstrap';

import './EmployeeForm.scss';

const EmployeeForm: React.FC = () => {
  return (
    <Form className="EmployeeForm">
      <Input className="EmployeeForm__input" type="text" placeholder="Name" />
      <Input className="EmployeeForm__input" type="text" placeholder="Lastname" />
      <Input className="EmployeeForm__input" type="text" placeholder="Username" />
      <Input className="EmployeeForm__input" type="email" placeholder="Email" />
    </Form>
  );
};

export default EmployeeForm;
