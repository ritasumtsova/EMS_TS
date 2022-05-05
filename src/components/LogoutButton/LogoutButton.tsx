import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const LogoutButton: React.FC = () => {
  const logoutHandler = (): void => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN!);
  };

  return (
    <Link to="/">
      <Button color="primary" onClick={logoutHandler}>
        Logout
      </Button>
    </Link>
  );
};

export default LogoutButton;
