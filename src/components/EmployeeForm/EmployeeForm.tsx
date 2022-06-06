import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Row, Button } from 'reactstrap';
import { AppThunkDispatch } from '../../types/store/appThunkTypes';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { addEmployeeThunk } from '../../store/actionCreators/employeesActionCreators';
import { Employee } from '../../types/components/employees';
import './EmployeeForm.scss';

interface EmployeeFormProps {
  id: string;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ id }) => {
  const firstName = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const userName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: Employee = {
        _id: id,
        firstName: firstName!.current!.value,
        lastName: lastName!.current!.value,
        userName: userName!.current!.value,
        email: email!.current!.value
      };
      
      thunkDispatch(addEmployeeThunk(data));
    }, [thunkDispatch]
  )

  return (
    <Form className="EmployeeForm" onSubmit={submitHandler}>
      <Input
        innerRef={firstName}
        className="EmployeeForm__input"
        type="text"
        placeholder="First name"
      />
      <Input
        innerRef={lastName}
        className="EmployeeForm__input"
        type="text"
        placeholder="Last name"
      />
      <Input
        innerRef={userName}
        className="EmployeeForm__input"
        type="text"
        placeholder="Username"
      />
      <Input
        innerRef={email}
        className="EmployeeForm__input"
        type="email"
        placeholder="Email"
      />
      <Row className="DepartmentForm__footer">
        <Button
            color="primary"
            type="submit"
          >
            Save
          </Button>
          <Button
            onClick={() => dispatch(closeModal())}
            color="danger"
          >
            Cancel
          </Button>
      </Row>
    </Form>
  );
};

export default EmployeeForm;
