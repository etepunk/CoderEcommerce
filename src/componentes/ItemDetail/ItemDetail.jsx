import { useCart } from '../CartContext/CartContext';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nome, preco, stock }) => {
  const { addItem } = useCart();

  if (preco === undefined) {
    return <p>Carregando...</p>;
  }

  const handleAdd = (quantidade) => {
    addItem({ id, nome, preco, quantidade });
    console.log(`Você adicionou ${quantidade} do produto ${nome}`);
  };

  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço: R$ {preco.toFixed(2)}</p>

      {stock === 0 ? (
        <p style={{ color: 'red' }}>Produto sem estoque</p>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
