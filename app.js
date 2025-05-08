import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo(a) � nossa loja online!" />
    </div>
  );
}

export default App;
