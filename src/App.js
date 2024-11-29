import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='home' element={<Home />} />
      
      <Route path='produtos' element={<Produtos />} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
