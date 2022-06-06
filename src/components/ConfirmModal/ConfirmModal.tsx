import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Button, Container } from 'reactstrap';
import { AppThunkDispatch } from '../../types/store/appThunkTypes';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { deleteDepartmentThunk } from '../../store/actionCreators/departmentsActionCreators';
import { useSelector } from 'react-redux';
import { modalsSelector } from '../../store/selectors/modals';
import { deleteEmployeeThunk } from '../../store/actionCreators/employeesActionCreators';

const ConfirmModal: React.FC = () => {
  const { content } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);

  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<AppThunkDispatch>();

  const submitHandler = useCallback(
    () => {
      if (currentModalContent?.employeeId) {
        const data = {
          departmentId: currentModalContent.departmentId!,
          employeeId: currentModalContent.employeeId
        };

        thunkDispatch(deleteEmployeeThunk(data))
      } else {
        thunkDispatch(deleteDepartmentThunk(currentModalContent?.departmentId!));
      }
    }, [thunkDispatch]
  )

  return (
    <Container className="ConfirmModal">
      <h6 className="ConfirmModal__message">
        Are you sure?
      </h6>
      <Row className="ConfirmModal__footer">
        <Button onClick={submitHandler} color="primary">
          OK
        </Button>
        <Button onClick={() => dispatch(closeModal())} color="danger">
          Cancel
        </Button>
      </Row>
    </Container>
  );
};

export default ConfirmModal;