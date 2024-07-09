import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="text-white ml-4 mt-4">Loading...</div>
    </div>
  );
};
