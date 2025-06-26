import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const Home = lazy(() => import('./components/Home'));
const Aboutus = lazy(() => import('./components/Aboutus'));
const Contactus = lazy(() => import('./components/Contactus'));
const Signin = lazy(() => import('./components/Signin'));
const Shop = lazy(() => import('./components/Shop'));
const Top = lazy(() => import('./components/Top'));

function PageTransitionWrapper({ children }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route path="/Contactus" element={<Contactus />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Top" element={<Top />} />
            </Routes>
          </PageTransitionWrapper>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
 