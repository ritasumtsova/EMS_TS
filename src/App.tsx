import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Col } from 'reactstrap';

import ModalContextProvider from './contexts/Modals/ModalContextProvider';
import LoaderContextProvider from './contexts/Loader/LoaderContextProvider';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login';
import Header from './components/Header/Header';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store/store';

const Departments: Function = React.lazy(() => import('./components/pages/Departments/Departments'));
const Department: Function = React.lazy(() => import('./components/pages/Department/Department'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LoaderContextProvider>
        <ModalContextProvider>
          <Header />
          <Col className="App" xs="12">
            <Routes>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </ModalContextProvider>
      </LoaderContextProvider>
    </Provider>
  );
};

export default App;
