import { Outlet, useNavigate } from "react-router";
import { useState } from "react";
import Header from "../components/Header/Header";
import './AdicionarProduto.css';

function AdicionarProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState({ nome: '', preco: '', descricao: '', imagem: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/produtos ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto adicionado:', data);
            navigate('/produtos');
        })
        .catch(error => console.error('Erro ao adicionar produto:', error));
    };

    return (
        <>
            <Header/>
            <h2>Adicionar Produto</h2>
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
                <button type="submit">Adicionar Produto</button>
            </form>
            <Outlet />
        </>
    );
}

export default AdicionarProduto;