import React from 'react';
import { Spinner } from 'reactstrap';

import './LoadingSpinner.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="LoadingSpinner">
      <Spinner
        className="LoadingSpinner__spinner"
        color="primary"
        type="border"
      >
        Loading...
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
