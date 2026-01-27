import { Outlet } from 'react-router';
import Header from '../../components/common/Header';
import TopBar from '../../components/common/TopBar';

function LayoutWithoutFooter() {
  return (
    <div>
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutWithoutFooter;
