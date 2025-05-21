import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

function CartWidget() {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.length;

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span role="img" aria-label="carrinho">🛒</span>
        <span>{cartItemCount}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
