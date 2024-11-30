import { NavLink, Outlet, useParams } from "react-router"


function ProdutoSobre() {
    const parms = useParams()
    return (
        <>
        
        <h1>Sobre o produto {parms.id}</h1>
        <NavLink style={{marginRight: "20px" }} to="avaliacao">ir para avaliacao</NavLink>
        <NavLink style={{marginRight: "20px" }} to="detalhes ">ir para detalhes</NavLink>
        <NavLink to="/home">home</NavLink>
        <Outlet/>
        
        </>
    )
}

export default ProdutoSobre