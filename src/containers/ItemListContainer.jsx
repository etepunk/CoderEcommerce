import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdutos, getProdutosPorCategoria } from "../data/products";
import ItemList from "../componentes/ItemList/ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
  const [produtos, setProdutos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchData = categoriaId ? getProdutosPorCategoria : getProdutos;
    fetchData(categoriaId).then(setProdutos);
  }, [categoriaId]);

  return (
    <div>
      {greeting && <h2>{greeting}</h2>}
      <ItemList produtos={produtos} />
    </div>
  );
};

export default ItemListContainer;
