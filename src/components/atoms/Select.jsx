import React from 'react';
import Icon from './Icon.jsx';

import ItemSelect from './ItemSelect.jsx';

const Select = ({ name, id, titleSelect, children, className = '' }) => {
  return (
    <select
      name={name}
      id={id}
      className={`form-select ${className}`}
    >
      <ItemSelect textOption={titleSelect} selected="true" className="d-none" />
      {children}
    </select>
  );
};

export default Select;
