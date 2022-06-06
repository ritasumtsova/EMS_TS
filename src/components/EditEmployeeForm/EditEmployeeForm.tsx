import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Row, Button } from 'reactstrap';
import { AppThunkDispatch } from '../../types/store/appThunkTypes';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { editEmployeeThunk } from '../../store/actionCreators/employeesActionCreators';
import { UpdateEmployee } from '../../types/components/employees';
import { modalsSelector } from '../../store/selectors/modals';

const EditEmployeeForm: React.FC = () => {
  const { content } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);
  
  const firstName = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  
  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: UpdateEmployee = {
        departmentId: currentModalContent?.departmentId!,
        employeeId: currentModalContent?.employeeId!,
        firstName: firstName!.current!.value,
        lastName: lastName!.current!.value,
        email: email!.current!.value
      };
      
      thunkDispatch(editEmployeeThunk(data));
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
        innerRef={email}
        className="EmployeeForm__input"
        type="email"
        placeholder="Email"
      />
      <Row className="EmployeeForm__footer">
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

export default EditEmployeeForm;
