<h1>Reforçando - UseContext e ContextAPI</h1>

### Exercício opcional proposto pelo professor Jaques durante o Módulo de ReactJS do curso de dev full stack da +PraTi

<hr/>

### Exercício 3: Contexto de Idioma

Objetivo: Criar um contexto para gerenciar o estado de um carrinho de compras.

Instruções:

- Crie o Contexto: Crie um novo arquivo CartContext.jsx e defina um contexto chamado CartContext.- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor CartContext.Provider e forneça um estado para os itens do carrinho.
- Consuma o Contexto: Crie um componente ProductList.jsx que exiba uma lista de produtos e um botão "Adicionar ao Carrinho" para cada produto. Esse botão deve adicionar o produto ao carrinho, utilizando o contexto CartContext.
- Exiba o Carrinho: Crie um componente Cart.jsx que consuma o contexto CartContext e exiba os itens adicionados ao carrinho.