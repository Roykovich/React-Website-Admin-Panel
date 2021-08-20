/**
 * I disable this component because I want the button to only appear when the 
 * user it's log
 */

// import AuthenticationButton from '../components/authentication-button';
import LogoutButton from '../components/logout-button';
import { useAuth0 } from '@auth0/auth0-react';

import "../styles/Navbar.css";

const Navbar = ({ toggleTheme }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      <p className="navbar-logo">Logo here</p>
      <div className="navbar-buttons">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={toggleTheme}></span>
        </label>
        {isAuthenticated ? <LogoutButton /> : ''}
        {/* <AuthenticationButton /> */}
      </div>
    </nav>
  );
};

export default Navbar;
