import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>Restaurante Casa Afuega</div>
      <nav>
        <Link to="/"> HOME </Link>
        <Link to="/reserve"> RESERVE </Link>
      </nav>
    </div>
  );
};

export default Header;
