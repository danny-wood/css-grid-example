import "./nav.css";

function Nav() {
  return (
    <nav>
      {data.map((item) => (
        <a key={item.id} href="#">
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export default Nav;

const data = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Products" },
  { id: 4, title: "Services" },
  { id: 5, title: "Contact" },
];
