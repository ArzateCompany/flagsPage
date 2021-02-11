import React from 'react';

const ItemSelect = ({ className, textOption, value }) => (
  <option
    className={` ${className}`}
    value={value}
  >
    {textOption}
  </option>
);

export default ItemSelect;