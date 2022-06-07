import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: Employee = {
        _id: id,
        firstName,
        lastName,
        userName,
        email
      };
      
      thunkDispatch(addEmployeeThunk(data));
    }, [thunkDispatch]
  );

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);
  
  return (
    <Form className="EmployeeForm" onSubmit={submitHandler}>
      <Input
        innerRef={firstNameRef}
        value={firstName}
        className="EmployeeForm__input"
        type="text"
        placeholder="First name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
      />
      <Input
        value={lastName}
        className="EmployeeForm__input"
        type="text"
        placeholder="Last name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
      />
      <Input
        value={userName}
        className="EmployeeForm__input"
        type="text"
        placeholder="Username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
      />
      <Input
        value={email}
        className="EmployeeForm__input"
        type="email"
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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

export default EmployeeForm;
