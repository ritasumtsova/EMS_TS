import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import LogoutButton from '../LogoutButton/LogoutButton';
import './Header.scss';

const Header: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN!)) setIsAuth(true);
  });

  const title = isAuth
    ? <Link className="Header__info-title" to="/departments">Employee management system</Link>
    : <h6 className="Header__info-title">Employee management system</h6>;

  return (
    <div className="Header">
      <Container className="Header__info-wrapper">
        {title}
        <LogoutButton />
      </Container>
    </div>
  );
};

export default Header;
