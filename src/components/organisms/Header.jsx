import React from 'react';

import DarkMode from '../molecules/DarkMode.jsx';

const Header = () => {
  return (
    <header className="bg-dark-light text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="m-0">Where in the world</h1>
          </div>
          <div className="col-lg-2 align-self-center">
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
