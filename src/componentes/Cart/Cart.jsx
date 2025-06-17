import { useCart } from '../CartContext/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h2>Meu Carrinho</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2)} x {item.quantidade} = <strong>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Limpar Carrinho</button>
      <Link to="/checkout">
        <button className="btn btn-success mt-2">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;
