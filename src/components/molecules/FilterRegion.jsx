import React from 'react';

import ItemSelect from '../atoms/ItemSelect.jsx';
import Select from '../atoms/Select.jsx';

const Form = () => {
  return (
    <form id="filter-region" className="bg-dark-light w-40 ml-auto d-flex pr-3">
      <Select name="region" id="select-region" titleSelect="Filter by region" className="bg-transparent text-light border-0 pl-3 py-3 w-100">
        <ItemSelect textOption="opción uno" className="bg-dark-light" />
        <ItemSelect textOption="opción uno" className="bg-dark-light" />
        <ItemSelect textOption="opción uno" className="bg-dark-light" />
      </Select>
    </form>
  );
}

export default Form;
