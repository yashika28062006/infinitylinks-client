import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>InfinityLinks</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Explore</a>
        <a href="/">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;