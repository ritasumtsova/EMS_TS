import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Row } from 'reactstrap';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { editDepartment } from '../../store/actionCreators/departmentsActionCreators';
import { modalsSelector } from '../../store/selectors/modals';

const EditDepartmentForm: React.FC = () => {
  const descritpionRef = useRef<HTMLInputElement | null>(null);

  const { content } = useSelector(modalsSelector);
  const department = content.at(-1);

  const dispatch = useDispatch();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = {
        _id: department?.departmentId!,
        description: descritpionRef!.current!.value
      };
      
      dispatch(editDepartment(data));
    }, [dispatch]
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
