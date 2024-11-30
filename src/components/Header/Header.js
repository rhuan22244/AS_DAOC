import './Header.css'
import { Link } from 'react-router';

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <span className="header-subtitle">{subtitle}</span>
            <h1 className="header-title">{title}</h1>
            <nav>
                <Link style={{marginRight: 20 }} to={"home"}>Home</Link>
                <Link style={{marginRight: 20 }} to="/produtos">Produtos</Link>
                <Link style={{marginRight: 20 }} to="contato">Contato</Link>
            </nav>
        </div>
    )
}

export default Header