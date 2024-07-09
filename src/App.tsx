import React from 'react';
import { AppRoutes } from './routing/Routes';
import { HashRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};
