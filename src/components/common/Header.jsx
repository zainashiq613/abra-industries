import { CiHeart, CiSearch } from 'react-icons/ci';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { NavLink } from 'react-router';
import Input from '../small/Input';

const navLinks = [
  { id: 1, title: 'Home', link: '/', icon: '' },
  { id: 2, title: 'Contact', link: '/contact', icon: '' },
  { id: 3, title: 'About', link: '/about', icon: '' },
  { id: 4, title: 'All Categories', link: '/allCategories', icon: <RiArrowDownSLine size={22} /> },
];

function Header() {
  return (
    <header className="flex items-center justify-center">
      <div className="flex items-center w-full max-w-7xl py-2">
        <div className="flex-1">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.link}
                className={({ isActive }) =>
                  isActive ? 'text-black border-b' : 'text-text-secondary'
                }
              >
                <div className="flex gap-1 items-center">
                  {link.title} {link.icon && <span>{link.icon}</span>}
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-18">
            <img className="w-full" src="/logo.png" alt="" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-6">
          <Input
            icon={<CiSearch size={25} />}
            placeholder={'What are you looking for?'}
            position={'right'}
          />
          <div>
            <CiHeart size={33} />
          </div>
          <div>
            <HiOutlineShoppingCart size={30} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
