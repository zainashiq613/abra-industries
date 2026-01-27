import { Route, Routes } from 'react-router';
import Layout from './pages/layout/Layout';
import { lazy, Suspense } from 'react';
import Loader from './components/small/Loader';
import LayoutWithoutFooter from './pages/layout/LayoutWithoutFooter';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Categories = lazy(() => import('./pages/Categories'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="allCategories" element={<Categories />} />
          </Route>

          <Route element={<LayoutWithoutFooter />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
