import { useNavigate, } from "react-router"
import Header from "../components/Header/Header"
function Produtos () {


    const navigate = useNavigate()

    function handleClick(id) {
        navigate(`/produtos/${id}`)
    }
    return (
        <>
        
        <Header title="Pagina dos Produtos"/>
        <h1 onClick={() => handleClick(1)} style={{ marginTop: 40}}>Produto 1</h1>
        <h1 onClick={() => handleClick(2)} style={{ marginTop: 40}}>Produto 2</h1>
        <h1 onClick={() => handleClick(3)} style={{ marginTop: 40}}>Produto 3</h1>
        <h1 onClick={() => handleClick(4)} style={{ marginTop: 40}}>Produto 4</h1>

        </>
    )
}

export default Produtos;