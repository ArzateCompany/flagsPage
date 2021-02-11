import React from 'react';

const FlagCard = ({urlImage, title, population, region, capital}) => {
  return(
    <div className="card bg-dark-light mb-6 ml-5">
      <img src={urlImage} alt="imagen" className="card-img-top" style={{maxHeight: 170, objectFit: 'cover'}}/>
      <h1 className="card-title font-weight-bold pl-3 pt-4 m-0">{title}</h1>
      <div className="py-3 pl-3 m-0 pb-4 mb-3">
        <p className="font-weight-light pb-1 m-0">
          <span className="font-weight-bold">Population: </span>{population}
        </p>
        <p className="font-weight-light pb-1 m-0">
          <span className="font-weight-bold">Region: </span>{region}
        </p>
        <p className="font-weight-light pb-1 m-0">
          <span className="font-weight-bold">Capital: </span>{capital}
        </p>
      </div>
    </div>
  );
};

export default FlagCard;