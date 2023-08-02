import React from 'react';
import Path from './routes'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './common/ui/NotFound';

const Home = React.lazy(() => import("./views/Home"));
const Details = React.lazy(() => import("./views/Details"));

const Base = ():JSX.Element => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={Path.HOME} element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            } />
          <Route path={Path.DETAIL} element={
              <React.Suspense fallback={<>...</>}>
                <Details />
              </React.Suspense>
            } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Base;
