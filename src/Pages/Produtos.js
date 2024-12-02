import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header"; // Ajuste o caminho conforme necessário
import './Produtos.css'; // Importando o CSS

function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifique a estrutura dos dados
                setProdutos(data);
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setProdutos(produtos.filter(produto => produto.id !== id));
            console.log('Produto excluído com sucesso');
        })
        .catch(error => console.error('Erro ao excluir produto:', error));
    };

    const handleEdit = (id) => {
        navigate(`/editar-produto/${id}`);
    };

    return (
        <div>
            <Header />
            <h2>Lista de Produtos</h2>
            <div className="produtos-container">
                {produtos.map(produto => (
                    <div className="produto-card" key={produto.id}>
                        <img src={produto.imagem} alt={produto.nome} />
                        <h3>{produto.nome}</h3>
                        <p>Preço: R$ {(Number(produto.preco) || 0).toFixed(2)}</p> {/* Conversão para número */}
                        <p>{produto.descricao}</p>
                        <div className="buttons">
                            <button onClick={() => handleEdit(produto.id)}>Editar</button>
                            <button onClick={() => handleDelete(produto.id)}>Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Produtos;