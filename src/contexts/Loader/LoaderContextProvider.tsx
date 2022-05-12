import React, { useState, useMemo } from 'react';

import LoaderContext from './LoaderContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

interface LoaderContextProviderProps {
  children: React.ReactNode;
}

const LoaderContextProvider: React.FC<LoaderContextProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoader = (isLoading: boolean) => {
    setIsLoading(!isLoading);
  };

  // HERE EVERYTHING SEEMS TO BE OK BECAUSE VALUE OF valueLoaderProvider IS OK AS EXPECTED 
  const valueLoaderProvider = useMemo(() => {
    return {
      isLoading,
      toggleLoader
    };
  }, [isLoading]);

  return (
    <>
      <LoaderContext.Provider value={valueLoaderProvider}>
        {isLoading && <LoadingSpinner />}
      </LoaderContext.Provider>
      {children}
    </>
  );
};

export default LoaderContextProvider;