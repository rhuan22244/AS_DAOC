import './Header.css';
import { Link } from 'react-router';

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <div className="header-subtitle">Produzido por Rhuan e Pedro</div>
            <h1 className="header-title">{title}</h1>
            <div className="nav-container">
                <nav>
                    <a href="http://localhost:3001/">Home</a>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/add-produto">Adicionar Produto</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;