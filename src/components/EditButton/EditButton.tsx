import React from 'react';
import { Button } from 'reactstrap';

const EditButton: React.FC = () => {
  return (
    <Button
      className="EditButton__btn"
      color="primary"
      disabled
    >
      Edit
    </Button>
  );
}

export default EditButton;
