import { useCart } from '../CartContext/CartContext';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nome, preco }) => {
  const { addItem } = useCart();

  const handleAdd = (quantidade) => {
    // Adiciona o produto com a quantidade selecionada no carrinho
    addItem({ id, nome, preco, quantidade });
    console.log(`Você adicionou ${quantidade} do produto ${nome}`);
  };

  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço: R$ {preco.toFixed(2)}</p>
      <ItemCount initial={1} stock={5} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
