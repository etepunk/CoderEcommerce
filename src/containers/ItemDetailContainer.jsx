import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdutoPorId } from "../data/products";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { produtoId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProdutoPorId(produtoId)
      .then((res) => {
        setProduto(res);
      })
      .catch(() => {
        setProduto(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [produtoId]);

  if (loading) return <p>Carregando...</p>;
  if (!produto) return <p>Produto não encontrado.</p>;

  return <ItemDetail {...produto} />;
};

export default ItemDetailContainer;
