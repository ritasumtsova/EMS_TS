import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Row } from 'reactstrap';
import { Department } from '../../types/components/departments';
import { AppThunkDispatch } from '../../types/store/appThunkTypes';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { addDepartmentThunk } from '../../store/actionCreators/departmentsActionCreators';
import './DepartmentForm.scss';

const DepartmentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);
  
  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const data: Department = {
        name,
        description
      };
      
      thunkDispatch(addDepartmentThunk(data));
    }, [thunkDispatch]
  );

  useEffect(() => {
    nameRef.current?.focus();
  }, [])

  return (
    <Form className="DepartmentForm" onSubmit={submitHandler}>
      <Input
        innerRef={nameRef}
        value={name}
        className="DepartmentForm__input"
        type="text"
        placeholder="Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Input
        value={description}
        className="DepartmentForm__input"
        type="text"
        placeholder="Description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
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

export default DepartmentForm;
