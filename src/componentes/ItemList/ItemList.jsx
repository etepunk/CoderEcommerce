import { Link } from "react-router-dom";

const ItemList = ({ produtos }) => {
  if (produtos.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
      {produtos.map((prod) => (
        <div key={prod.id} style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          width: "200px",
          textAlign: "center"
        }}>
          <h3>{prod.nome || prod.title}</h3>
          <p><strong>R$ {(prod.preco || prod.price)?.toFixed(2)}</strong></p>
          <Link to={`/produto/${prod.id}`}>Ver detalhes</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
