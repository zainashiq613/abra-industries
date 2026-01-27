import { Route, Routes } from 'react-router';
import Layout from './pages/layout/Layout';
import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Categories = lazy(() => import('./pages/Categories'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="allCategories" element={<Categories />} />
          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
