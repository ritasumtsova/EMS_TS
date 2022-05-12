import React, { useState } from 'react';

import LoaderContext from './LoaderContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

interface LoaderContextProviderProps {
  children: React.ReactNode;
}

const LoaderContextProvider: React.FC<LoaderContextProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoader = () => {
    setIsLoading((prevState) => !prevState);
  };

  const valueLoaderProvider = {
      isLoading,
      toggleLoader
  };

  return (
    <>
      <LoaderContext.Provider value={valueLoaderProvider}>
        {isLoading && <LoadingSpinner />}
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export default LoaderContextProvider;