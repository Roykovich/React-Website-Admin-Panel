import "../styles/Navbar.css";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav>
      <p className="navbar-logo">Logo here</p>
      <h1>John Doe State</h1>
      <div className="navbar-buttons">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={toggleTheme}></span>
        </label>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
