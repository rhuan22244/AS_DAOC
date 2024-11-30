import './Header.css'
import { Link } from 'react-router';

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <span className="header-subtitle">{subtitle}</span>
            <h1 className="header-title">{title}</h1>
            <nav>
                <Link to={"home"}>Home</Link>
                <Link to="/produtos/2">Produtos</Link>
                <Link to="contato">Contato</Link>
            </nav>
        </div>
    )
}

export default Header