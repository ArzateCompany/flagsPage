import React, {useEffect, useState} from 'react';

import Search from '../molecules/Search.jsx';
import FilterRegion from '../molecules/FilterRegion.jsx';
import FlagCard from '../molecules/FlagCard.jsx';

const Flag = () => {
  const API = 'https://restcountries.eu/rest/v2/region/europe';
  const [flags, setFlags] = useState([]);

  const getData = async (URL, setState) => {
    try{
      const response = await fetch(URL);
      const data = await response.json();
      setState(data);
    } catch (err){
      console.error(err.message);
      setState([])
    };
  }

  useEffect(() => {
    getData(API, setFlags);
  }, [API]);

const renderFlags = () => {
  return flags.map(flag => (
    <FlagCard
      key={flags.indexOf(flag)}
      urlImage={flag.flag}
      title={flag.name}
      population={flag.population}
      region={flag.region}
      capital={flag.capital}
    />
    ))
  };

  return (
    <section className="bg-dark text-light h-100">
      <div className="container">
        <div className="row py-4 mb-5">
          <div className="col-lg-6 pl-0">
            <Search />
          </div>
          <div className="col-lg-6 pr-0">
            <FilterRegion id="filter-region" />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around">
            {
              renderFlags()
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flag;