import { Outlet } from 'react-router';
import TopBar from '../../components/common/TopBar';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

function Layout() {
  return (
    <section>
      <div>
        <TopBar />
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default Layout;
