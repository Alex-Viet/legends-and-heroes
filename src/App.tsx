import React from 'react';
import { router } from './routing/Routes';
import { RouterProvider } from 'react-router-dom';

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
