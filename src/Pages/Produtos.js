import { useNavigate } from "react-router"
import Header from "../components/Header/Header"
function Produtos () {

    const navigate = useNavigate()

    function levarParaHome(){
        navigate("/home")
    }



    return (
        <>
        
        <Header title="Pagina dos Produtos"/>
        <button onClick={levarParaHome}>Navegar para home</button>

        </>
    )
}

export default Produtos;