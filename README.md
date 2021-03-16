# Sumicity Dojo Node

## Descrição

Projeto criado para apresentação dentro do time da Sumicity na empresa CWI. A ideia era passar conhecimentos básicos sobre o `node.js` para os integrantes do grupo. Foi feita uma apresentação teorica sobre o assunto antes da apresentação do projeto. 

## Funcionalidades

Aplicação voltada para cadastros de filmes e scores para esses filmes. Possuindo as seguintes request's:

`/movie (POST)` - Cria um filme.
`/movie (GET)` - Busca um filme através do seu nome.
`/score/${movieName} (GET)` - Busca o score de um filme através do seu nome.
`/score (POST)` - Cria um score para um filme baseado em seu nome.