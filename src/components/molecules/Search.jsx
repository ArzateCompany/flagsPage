import React from 'react';
import Icon from '../atoms/Icon.jsx';

const Search = () => {
  return (
    <div className="bg-dark-light py-2 w-75">
      <Icon typeIcon={'search'} className="px-3" />
      <input type="text" className="bg-dark-light text-light border-0" placeholder="Search for a country..." />
    </div>
  );
};

export default Search;
