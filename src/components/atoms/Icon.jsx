import React from 'react';

const Icon = ({ typeIcon, className }) => (
  <i className={`fas fa-${typeIcon} ${className}`}></i>
);

export default Icon;
