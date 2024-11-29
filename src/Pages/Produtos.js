import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

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