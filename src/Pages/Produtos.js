import { useNavigate, useParams } from "react-router"
import Header from "../components/Header/Header"
function Produtos () {

    const parms = useParams()



    return (
        <>
        
        <Header title="Pagina dos Produtos"/>
        <h1 onClick={() => handleClick(1)} style={{ marginTop: 40}}>Produto 1</h1>
        <h1 onClick={() => handleClick(2)} style={{ marginTop: 40}}>Produto 2</h1>
        <h1 onClick={() => handleClick(3)} style={{ marginTop: 40}}>Produto 3</h1>
        <h1 onClick={() => handleClick(4)} style={{ marginTop: 40}}>Produto 4</h1>
        
        {/* <button onClick={levarParaHome}>Navegar para home</button> */}

        </>
    )
}

export default Produtos;