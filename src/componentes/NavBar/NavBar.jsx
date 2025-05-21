import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ccc',
        width: '100%',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}></h1>
      </div>

      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categoria/DBA">DBA</Link></li>
        <li><Link to="/categoria/Programação">Programação</Link></li>
        <li><Link to="/categoria/InfraEstrutura">Infraestrutura</Link></li>
        <li><Link to="/categoria/AWS">AWS</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
