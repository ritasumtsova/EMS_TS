import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Row, Button } from 'reactstrap';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { editEmployee } from '../../store/actionCreators/employeesActionCreators';
import { EditEmployee } from '../../types/components/employees';
import { modalsSelector } from '../../store/selectors/modals';

const EditEmployeeForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const { content } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);
  
  const dispatch = useDispatch();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: EditEmployee = {
        _id: currentModalContent!.employeeId!,
        firstName,
        lastName,
        email
      };
      
      dispatch(editEmployee(data));
    }, [firstName, lastName, email]
  );
  
  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  return (
    <Form className="EmployeeForm" onSubmit={submitHandler}>
      <Input
        value={firstName}
        innerRef={firstNameRef}
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

export default EditEmployeeForm;
