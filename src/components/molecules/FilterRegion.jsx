import React, {useState} from 'react';

import ItemSelect from '../atoms/ItemSelect.jsx';
import Select from '../atoms/Select.jsx';

const Form = () => {
  const [filter, setFilter] = useState('');
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <form id="filter-region" className="bg-dark-light w-40 ml-auto d-flex pr-3">
      <Select
        name="region"
        id="select-region"
        titleSelect="Filter by region"
        className="bg-transparent text-light border-0 pl-3 py-3 w-100"
        onChange={handleChange}
      >
        <ItemSelect textOption="European" className="bg-dark-light" value='eu' />
        <ItemSelect textOption="African" className="bg-dark-light" value="au"/>
        <ItemSelect textOption="North america" className="bg-dark-light" value="nafta"/>
      </Select>
    </form>
  );
}

export default Form;
