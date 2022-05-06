import React from 'react';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import DepartmentsAPI from '../../API/Departments';
import './AddButton.scss';

interface AddButtonProps {
  title: string;
}

const AddButton: React.FC<AddButtonProps> = ({ title }) => {
  // const addDepartment = async () => {
  //   try {
  //     await DepartmentsAPI.addDepartment('test', 'description');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Col className="AddButton" xs="4">
      <Button
        className="AddButton__btn"
        color="success"
        size="lg"
        block
        // onClick={addDepartment}
      >
        <span>
          {title}
        </span>
        <span className="AddButton__btn-icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Button>
    </Col>
  );
};

export default AddButton;
