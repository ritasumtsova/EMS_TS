import React from 'react';
import { Button } from 'reactstrap';

const DeleteButton: React.FC = () => {
  return (
    <Button
      className="DeleteButton__btn"
      color="danger"
      disabled
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
