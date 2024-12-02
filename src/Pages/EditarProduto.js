import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../components/Header/Header"; // Ajuste o caminho conforme necessário

function EditarProduto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '', imagem: '' });

    useEffect(() => {
        fetch(`http://localhost:3000/produtos/${id}`)
            .then(response => response.json())
            .then(data => setProduto(data))
            .catch(error => console.error('Erro ao buscar produto:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto atualizado:', data);
            navigate('/produtos');
        })
        .catch(error => console.error('Erro ao atualizar produto:', error));
    };

    return (
        <>
            <Header title="Editar Produto"/>
            <h2>Editar Produto</h2>
            <form onSubmit={handleSubmit} className="produto-form">
                <div className="form-group">
                    <label>
                        Nome do Produto:
                        <input type="text" name="nome" value={produto.nome} onChange={handleChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Preço do Produto:
                        <input type="number" name="preco" value={produto.preco} onChange={handleChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Descrição do Produto:
                        <textarea name="descricao" value={produto.descricao} onChange={handleChange} required></textarea>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        URL da Imagem:
                        <input type="text" name="imagem" value={produto.imagem} onChange={handleChange} required />
                    </label>
                </div>
                <button type="submit">Atualizar Produto</button>
            </form>
        </>
    );
}

export default EditarProduto;