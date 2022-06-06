import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Row } from 'reactstrap';
import { AppThunkDispatch } from '../../types/store/appThunkTypes';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { editDepartmentThunk } from '../../store/actionCreators/departmentsActionCreators';

const EditDepartmentForm: React.FC = () => {
  const descritpionRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = {
        departmentId: '',
        description: descritpionRef!.current!.value
      };
      
      thunkDispatch(editDepartmentThunk(data));
    }, [thunkDispatch]
  );

  useEffect(() => {
    descritpionRef.current?.focus();
  })

  return (
    <Form className="DepartmentForm" onSubmit={submitHandler}>
      <Input
        innerRef={descritpionRef}
        className="DepartmentForm__input"
        type="text"
        placeholder="Description"
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

export default EditDepartmentForm;
