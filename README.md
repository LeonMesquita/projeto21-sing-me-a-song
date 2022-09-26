# <p align = "center"> Projeto 21 - Sing Me a Song </p>

<p align="center" >
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f399-fe0f.svg" height="200"/>
   
</p>




##  :clipboard: Descrição

Sing Me a Song é uma aplicação para recomendação anônima de músicas. Quanto mais as pessoas curtirem uma recomendação, maior a chance dela ser recomendada para outras pessoas.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- Node.js
- TypeScript
- Postgresql with Prisma
- Jest and Supertest

***

## :rocket: Rotas

```yml
POST /recommendations
    - Rota para adicionar uma nova recomendação
    - headers: {}
    - body:{
        "name": "Lorem ipsum",
        "youtubeLink": "https://www.youtube.com/watch?v=jtNrx1c3Xh8"
    }
```
    

    
```yml 
POST /recommendations/:id/upvote
    - Rota para adicionar uma pontuação a uma recomendação
    - headers: {}
    - body: {}
```
```yml 
POST /recommendations/:id/downvote
    - Rota para remover uma pontuação a uma recomendação
    - headers: {}
    - body: {}
```
```yml
GET /recommendations
    - Rota que retorna as 10 últimas recomendações
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 1,
                "name": "Metallica - Disposable Heroes",
                "youtubeLink": "https://www.youtube.com/watch?v=jtNrx1c3Xh8",
                "score": 245
            }
        ]
``` 

```yml
GET /recommendations/:id
    - Rota que retorna uma recomendação pelo seu ID
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        {
            "id": 1,
            "name": "Metallica - Disposable Heroes",
            "youtubeLink": "https://www.youtube.com/watch?v=jtNrx1c3Xh8",
            "score": 245
        }
``` 


```yml
GET /recommendations/random
    - Rota que retorna uma recomendação aleatória
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        {
            "id": 1,
            "name": "Metallica - Disposable Heroes",
            "youtubeLink": "https://www.youtube.com/watch?v=jtNrx1c3Xh8",
            "score": 245
        }
``` 
 
```yml
GET /recommendations/top/:amount
    - Rota que retorna as top X músicas (parâmetro :amount da rota) com maior número de pontos
    - headers: {}
    - body: {}
    - A resposta tem o formato:
        [
            {
                "id": 1,
                "name": "Metallica - Disposable Heroes",
                "youtubeLink": "https://www.youtube.com/watch?v=jtNrx1c3Xh8",
                "score": 245
            },
                        {
                "id": 2,
                "name": "Megadeth - Tornado of Souls",
                "youtubeLink": "https://www.youtube.com/watch?v=L8HhOMNrulE",
                "score": 112
            }
        ]
```
***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/LeonMesquita/projeto21-sing-me-a-song.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```
***

##  Rodando os testes

Antes de rodar os testes, certifique-se de criar um segundo banco de dados para ser utilizado exclusivamente nos testes e colar sua URL em um arquivo chamado ".env.test".

Rodando os testes de integração:
```
npm run test:integration
```

Rodando os testes unitários:
```
npm run test:unit
```