import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './web/Home';
import NotFound from './common/ui/NotFound';

const Base = ():JSX.Element => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Base;
