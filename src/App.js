import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css';
import Home from './Pages/Home'
import Produtos from './Pages/Produtos';

function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='home' element={<Home />} />

      <Route path='produtos/:id' element={<Produtos />} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
