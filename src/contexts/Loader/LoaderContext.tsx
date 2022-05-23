import React from 'react';
import { LoadingSpinnerContext } from '../../types/components/loader';

const LoaderContext = React.createContext<LoadingSpinnerContext | null>(null);

export default LoaderContext;