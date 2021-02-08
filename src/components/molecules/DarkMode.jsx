import React from 'react';

import Icon from '../atoms/Icon.jsx';

const DarkMode = () => {
  return (
    <div className="d-flex justify-center-around align-items-center">
      <Icon typeIcon="moon" className="pr-2" />
      <p className="f-sm font-weight-bold m-0">Dark mode</p>
    </div>
  );
};

export default DarkMode;
