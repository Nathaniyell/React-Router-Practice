import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
        
      </main>
    </div>
  );
}
//The Outlet specifies where other components of the page should be displayed and in this case, below the navbar
