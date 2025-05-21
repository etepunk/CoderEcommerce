import { Link } from "react-router-dom";

const ItemList = ({ produtos }) => (
  <div>
    {produtos.map((prod) => (
      <div key={prod.id}>
        <h3>{prod.nome}</h3>
        <p>R$ {prod.preco}</p>
        <Link to={`/produto/${prod.id}`}>Ver detalhes</Link>
      </div>
    ))}
  </div>
);

export default ItemList;
