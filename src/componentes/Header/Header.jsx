// src/componentes/Header/Header.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0">GS Prestação de Serviço</h1>
        <div className="d-flex align-items-center gap-2">
          <a href="/form" className="btn btn-outline-primary">
            Olá, faça seu login ou cadastre-se
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
