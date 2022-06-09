import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Button, Container } from 'reactstrap';
import { closeModal } from '../../store/actionCreators/modalsActionCreators';
import { useSelector } from 'react-redux';
import { modalsSelector } from '../../store/selectors/modals';
import { deleteEmployee } from '../../store/actionCreators/employeesActionCreators';
import { deleteDepartment } from '../../store/actionCreators/departmentsActionCreators';

const ConfirmModal: React.FC = () => {
  const { content } = useSelector(modalsSelector);
  const currentModalContent = content.at(-1);

  const dispatch = useDispatch();

  const submitHandler = useCallback(
    () => {
      if (currentModalContent?.employeeId) {
        const data = {
          departmentId: currentModalContent.departmentId!,
          employeeId: currentModalContent.employeeId
        };

        dispatch(deleteEmployee(data))
      } else {
        dispatch(deleteDepartment(currentModalContent?.departmentId!));
      }
    }, [dispatch]
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