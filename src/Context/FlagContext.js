import {createContext} from 'react';

const FlagContext = createContext({
  flags: [],
  filterFlag: '',
  filterRegion: '',
});

export default FlagContext;
