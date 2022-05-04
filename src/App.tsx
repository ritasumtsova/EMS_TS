import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import PrivateRoute from './routes/PrivateRoute';
// eslint-disable-next-line import/no-unresolved
import Error from './components/pages/Error/Error';
// eslint-disable-next-line import/no-unresolved
import Login from './components/pages/Login/Login';
import './App.css';

// eslint-disable-next-line import/no-unresolved
const Departments: Function = React.lazy(() => import('./components/pages/Departments/Departments'));
// eslint-disable-next-line import/no-unresolved
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
