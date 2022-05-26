import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

import './NotFound.scss';

interface NotFoundProps {
  errorMessage?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ errorMessage }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container className="NotFound">
      <h3 className="NotFound__title">{errorMessage}</h3>
      <Button className="NotFound__btn" color="primary" onClick={goBack}>Go back</Button>
    </Container>
  );
};

export default NotFound;
