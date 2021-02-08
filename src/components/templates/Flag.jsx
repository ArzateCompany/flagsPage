import React from 'react';

import Search from '../molecules/Search.jsx';

const Flag = () => {
  return (
    <section className="bg-dark text-light">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-6">
            <Search />
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  );
};

export default Flag;