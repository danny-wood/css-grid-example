import "./header.css";
import Nav from "../nav/Nav";

function Header() {
  return (
    <header>
      <div className="contained">
        <a href="#" className="logo">
          Logo
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
