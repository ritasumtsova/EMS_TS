import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import Error from './components/pages/Error/Error';
import Login from './components/pages/Login/Login';
import './App.css';

const Departments: Function = React.lazy(() => import('./components/pages/Departments/Departments'));
const Department: Function = React.lazy(() => import('./components/pages/Department/Department'));

const App: React.FC = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/departments/:id"
            element={
              (
                <Suspense fallback={<p>Loading</p>}>
                  <Department />
                </Suspense>
              )
            }
          />
          <Route
            path="/departments"
            element={
              (
                <Suspense fallback={<p>Loading</p>}>
                  <Departments />
                </Suspense>
              )
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </>
    </Routes>
  );
};

export default App;
