import { useCart } from '../CartContext/CartContext';

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
            {item.nome} - R$ {item.preco.toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
};

export default Cart;
