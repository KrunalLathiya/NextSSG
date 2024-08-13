import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <nav className="navbar navbar-expand navbar-dark">
          <Link href="/" className="navbar-brand">
            SSG Blog Example
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
