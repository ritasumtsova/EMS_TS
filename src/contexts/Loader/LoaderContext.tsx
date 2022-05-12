import React from 'react';
import { LoadingSpinnerContext } from '../../types/loader';

const LoaderContext = React.createContext<LoadingSpinnerContext | null>(null);

export default LoaderContext;