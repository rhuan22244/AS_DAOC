import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos'; 
import AdicionarProduto from './Pages/AdicionarProduto';
import EditarProduto from './Pages/EditarProduto'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='produtos' element={<Produtos />} /> {}
          <Route path='/add-produto' element={<AdicionarProduto />} />
          <Route path='/editar-produto/:id' element={<EditarProduto />} /> {}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;