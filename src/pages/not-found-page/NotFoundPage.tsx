import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="text-white text-center">
      <h1 className="text-6xl mt-12">404</h1>
      <h2 className="text-3xl my-6">Page not found</h2>
      <Link to="/" className="text-xl underline hover:no-underline">
        back to main page
      </Link>
    </div>
  );
};
