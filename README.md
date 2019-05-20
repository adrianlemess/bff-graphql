# BFF e GraphQL

Este projeto é uma POC para fins de estudos onde foi desenvolvido uma arquitetura utilizando conceitos de BFF

## Sumário

  - [Introdução](#introdu%C3%A7%C3%A3o)
      - [Principais recursos utilizados](#principais-recursos-utilizados)
    - [Pré-requisitos](#pr%C3%A9-requisitos)
    - [Instalação](#instala%C3%A7%C3%A3o)
  - [Testes Unitários](#testes-unit%C3%A1rios)
  - [Recursos do BFF](#recursos-do-bff)
  - [Conceitos](#conceitos)
  - [Autor](#autor)
  - [License](#license)
  
## Introdução

Nessa seção é descrito as dependências utilizadas na aplicação como um todo, instruções de como iniciar o projeto em modo de desenvolvimento e realização de testes.

### Principais recursos utilizados

- [Node](https://nodejs.org/) - Necessário para o Angular.
- [NPM](https://www.npmjs.com) - Gerenciador de Dependências.
- [Jest](https://jestjs.io/) - Framework de testes, necessário para criação dos specs, contendo spies, stubs, assertions e mais.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que traz recursos importantes como tipagem de variáveis e funções, criação de interfaces, enum, generics e compila pra JavaScript. TypeScript traz uma segurança pro desenvolvimento e refatoração de códigos devido aos erros em tempo de compilação
- [Docker e Docker Compose](https://www.docker.com) - Ferramenta de criação de containers para facilitar o processo de desenvolvimento da aplicação replicando a infra de produção no ambiente de desenvolvimento.
- [GraphQL](https://graphql.org/) - É uma linguagem de query para APIs retornando data. Serve como agregação, possibilitando ao client buscar apenas o que ele necessita. Ferramenta open-source criada pelo Facebook.
- [JSON-server](https://github.com/typicode/json-server) - Ferramenta feita com o intuito de disponibilizar APIs mockadas apenas para testes.

### Pré-requisitos

O que foi necessário para rodar o projeto:

- Node versão v10.14.2
- GIT instalado
- Docker

### Instalação

O processo para rodar o projeto com docker é relativamente fácil.

- Rode o comando
```
docker-compose -d up --build
```

- Após isso:

```
docker-compose -d up
```

NOTA: A flag -d é para rodar os serviços em modo detached, caso queira ver os logs no console execute sem essa flag.

## Testes Unitários

Para rodar os testes unitários é necessário dentro do diretório do BFF:

- Instalar as dependências do BFF

```
npm install
```

- rodar o comando dentro da pasta do BFF:

```
npm run test
```
## Recursos do BFF

- GET /health - Para verificar o status do BFF, nesse endpoint pode ser adicionado chamadas específicas para validar o status.
- ALL /api/* - Faz um proxy para todas as APIs do backend (JSON-Server)
- GET /graphql - Faz um proxy pro graphql
- ALL /custom - Onde ficará endpoints com lógicas específicas e customizadas
  - GET /custom/users-modified - endpoint exemplo que retorna uma lista de usuários onde é adicionado um atributo extra (completeName) que concatena o firstName e o lastName


## Conceitos

- BFF (Backend for Frontend) - É um design pattern para construção de APIs específicas para um client, melhorando a experiência do usuário. É uma camada entre as APIs e o client, possibilitando colocar lógicas que não deveriam nem estar no frontend mas também não deveriam estar na API. Por exemplo, algo específico para um dispositivo móvel. O BFF aqui criado tem uma interface para o GraphQL, também pode ser construido endpoints customizados nele e no /api faz um proxy direto pra chamar qualquer API do backend (nessa POC representado pelo JSON-Server).
- GraphQL - Usado como agregador de APIs.
- JSON-SERVER - Como nessa POC o GraphQL é utilizado para agregação de APIs, utilizeo o JSON-SERVER para simular as APIs, disponibilizando dados de user e company e uma relação entre eles.

## Autor

- **Adrian Lemes Caetano** - [GitHub](https://github.com/adrianlemess)

<a href="https://adrianlemess.github.io">
  <img 
  alt="Imagem do Autor Adrian Lemes" src="https://avatars1.githubusercontent.com/u/12432777?s=400&u=927d77dcc0b02c1ac69360f2194336a2517e6f08&v=4" width="100">
</a>

## License

Esta POC possui Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para saber mais detalhes.
