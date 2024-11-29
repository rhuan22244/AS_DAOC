// function Header({title}) {

//     return (
//         <div style={{width: "100%", height: "50px"}}>
//             <h1>{title}</h1>
//         </div>
//     )
// }

// export default Header

import './Header.css'
import { Link } from 'react-router-dom';

function Header({ title, subtitle }) {
    return (
        <div className="header">
            <span className="header-subtitle">{subtitle}</span>
            <h1 className="header-title">{title}</h1>
            <nav>
                <Link to={"home"}>Home</Link>
                <Link to="produtos">Produtos</Link>
                <Link to="contato">Contato</Link>
            </nav>
        </div>
    )
}

export default Header