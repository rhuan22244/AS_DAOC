import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css';
import Home from './Pages/Home'
import Produtos from './Pages/Produtos';
import ProdutoAvaliacao from './Pages/ProdutosAvaliacao';
import ProdutoDetalhe from './Pages/ProdutoDetalhe';
import AdicionarProduto from './Pages/AdicionarProduto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='produtos' element={<Produtos />} />
          <Route path='/add-produto' element={<AdicionarProduto/>} >
            <Route path='avaliacao' element={<ProdutoAvaliacao />} />
            <Route path='detalhes' element={<ProdutoDetalhe />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
