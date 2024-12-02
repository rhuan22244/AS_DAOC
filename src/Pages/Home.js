import Header from "../components/Header/Header";


function Home() {
    return (
        <>

            <Header />
            <h2>Critérios de avaliação AS:</h2>
            <p>1 - Código organizado conforme o proposto.</p>
            <p>2 - Utilização do fetch ou algum httpClient fazendo requisição GET (Pegar os produtos), POST (Inserir um produto) para nossa API simulada de produtos, usando json server</p>
            <p>3 - Utilização dos hooks (useState, useEffect) Construir pelo menos um custom hook</p>
            <p>4 - Utilizar a lib de navegação e seus hooks</p>
            <p>5 - Código-componentizado</p>
            <p>6 - 2107-1018 css igual ao do figma ou superior (sugestão que seja superior)</p>
            <p>7 - Concluir o proposto da avaliação</p>
            <p>8 - Proposta da Avaliação: Ter uma página HOME, PRODUTO (COM CRUD), DETALHE DO PRODUTO. O EXEMPLO DE LAYOUT AO LADO É APENAS UMA BASE</p>
            <p>9 - Na página de produtos deve ser possível visualizar, cadastrar, excluir e editar os produtos que vem da nossa API simulada de produtos (json server)</p>
            <p>10 - Tudo deve vir da API SIMULADA DE PRODUTOS e deve ser salvo nela (GET, POST)</p>
            <p>11 - Campos do form precisam conter validação</p>
        </>
    )
}

export default Home;