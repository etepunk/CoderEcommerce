import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProdutoPorId } from "../data/products";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { produtoId } = useParams(); // Declarado dentro do componente

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("produtoId recebido:", produtoId);
    setLoading(true);

    getProdutoPorId(produtoId)
      .then((data) => {
        console.log("Produto retornado:", data);
        setProduto(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar produto:", err);
      })
      .finally(() => {
        console.log("Finalizando loading");
        setLoading(false);
      });
  }, [produtoId]);

  if (loading) return <p>Carregando...</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <ItemDetail
      id={produto.id}
      nome={produto.title}
      preco={produto.price}
      stock={produto.stock}
    />
  );
};

export default ItemDetailContainer;
