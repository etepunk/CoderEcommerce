import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Header from "./componentes/Header/Header";
import Cart from './componentes/Cart/Cart';
import { CartProvider } from './componentes/CartContext/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/produto/:produtoId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Página não encontrada (404)</h2>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
