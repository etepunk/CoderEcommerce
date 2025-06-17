import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import db from "../firebase/config";

export const getProdutos = async () => {
  const produtosRef = collection(db, "items");
  const snapshot = await getDocs(produtosRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProdutoPorId = async (produtoId) => {
  const docRef = doc(db, "items", produtoId); // Busca pelo ID do item
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

// Agora usa diretamente o categoryId vindo da URL (ex: "1", "2", "3"...)
export const getProdutosPorCategoria = async (categoryId) => {
  const produtosRef = collection(db, "items");
  const produtosQuery = query(produtosRef, where("categoryId", "==", categoryId));
  const produtosSnapshot = await getDocs(produtosQuery);

  return produtosSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
