import React, { useMemo, useState } from 'react';

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
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export default LoaderContextProvider;