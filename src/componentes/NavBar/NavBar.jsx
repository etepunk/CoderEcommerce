import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#eee',
      width: '100%',
    }}>
      <div><h1>Minha Loja</h1></div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
