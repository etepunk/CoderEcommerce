import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  const adicionarAoCarrinho = () => {
    if (onAdd) onAdd(count);
    alert(`Adicionado ${count} item(ns) ao carrinho`);
  };

  return (
    <div>
      <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ItemCount;
