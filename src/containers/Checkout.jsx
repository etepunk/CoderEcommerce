import { useState } from "react";
import { useCart } from "../componentes/CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/config";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cartItems, clearCart } = useCart();

  const finalizarCompra = async () => {
    const pedido = {
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0),
      data: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), pedido);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
    }
  };

  return (
    <div className="container mt-5">
      {orderId ? (
        <div className="alert alert-success">
          Pedido realizado com sucesso! <br />
          <strong>ID do pedido:</strong> {orderId}
        </div>
      ) : (
        <>
          <h2>Finalizar Compra</h2>
          <button className="btn btn-primary" onClick={finalizarCompra}>
            Confirmar Pedido
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
