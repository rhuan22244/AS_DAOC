import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css';
import Home from './Pages/Home'
import Produtos from './Pages/Produtos';
import ProdutoSobre from './Pages/ProdutoSobre';
import ProdutoAvaliacao from './Pages/ProdutosAvaliacao';
import ProdutoDetalhe from './Pages/ProdutoDetalhe';

function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='produtos' element={<Produtos />} />
      <Route path='produtos/:id/*' element={<ProdutoSobre />} >
        <Route path='avaliacao' element={<ProdutoAvaliacao />} />
        <Route path='detalhes' element={<ProdutoDetalhe />} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
