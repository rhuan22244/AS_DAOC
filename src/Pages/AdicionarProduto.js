import { NavLink, Outlet, useParams } from "react-router"
import Header from "../components/Header/Header"

function AdicionarProduto() {
    const parms = useParams()
    return (
        <>
            <Header title="Adicionar Produtos" />
            <h1>Sobre o produto {parms.id}</h1>
            <NavLink style={{marginRight: "20px" }} to="avaliacao">ir para avaliacao</NavLink>
            <NavLink style={{marginRight: "20px" }} to="detalhes ">ir para detalhes</NavLink>
            <Outlet/>
        </>
    )
}

export default AdicionarProduto