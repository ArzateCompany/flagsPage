import React from 'react';

import ItemSelect from './ItemSelect.jsx';

const Select = ({ name, id, titleSelect, children, className, onChange, value }) => {
  return (
    <select
      name={name}
      id={id}
      className={`form-select ${className}`}
      onChange={onChange}
      value={value}
    >
      <ItemSelect textOption={titleSelect} selected className="d-none"/>
      {children}
    </select>
  );
};

export default Select;
