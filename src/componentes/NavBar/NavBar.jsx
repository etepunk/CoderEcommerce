import { Link } from 'react-router-dom';
import './NavBar.css'; 
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/categoria/3">Infraestrutura</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/categoria/2">Programação</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/categoria/1">DBA</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/4">AWS</Link>
            </li>
          </ul>


          {/* Carrinho à direita */}
          <div className="d-flex ms-lg-auto">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
