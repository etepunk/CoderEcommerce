import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/ItemList/ItemList";
import { getProdutos, getProdutosPorCategoria } from "../data/products";

const ItemListContainer = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        let data;
        if (categoriaId) {
          data = await getProdutosPorCategoria(categoriaId);
        } else {
          data = await getProdutos();
        }
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoriaId]);

  return (
    <>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ItemList produtos={produtos} />
      )}
    </>
  );
};

export default ItemListContainer;
