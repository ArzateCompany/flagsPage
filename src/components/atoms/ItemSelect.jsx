import React from 'react';

const ItemSelect = ({ className, value, textOption, selected }) => (
  <option
    className={` ${className}`}
    value={value}
    selected={selected || false}
  >
    {textOption}
  </option>
);

export default ItemSelect;