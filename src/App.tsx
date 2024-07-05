import React from 'react';
import { useGetPotterCharactersQuery } from './features/harry-potter/characters/charactersSlice';

const App: React.FC = () => {
  const { data } = useGetPotterCharactersQuery();
  console.log('🚀 ~ App ~ data:', data);

  return <div className="App"></div>;
};

export default App;
