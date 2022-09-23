# <p align = "center"> Projeto 21 - Sing Me a Song </p>

<p align="center" >
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f399-fe0f.svg" height="200"/>
   
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-SEU_NOME-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SEU_NOME/NOME_DO_PROJETO?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna massa, mollis id facilisis ut, tristique convallis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas a egestas sapien, lacinia iaculis nisi. Nam molestie fringilla egestas. Vestibulum pulvinar consequat arcu a varius. Vestibulum nec finibus enim. In at lobortis elit. Mauris imperdiet neque quis imperdiet ornare. Maecenas non nulla orci. Vestibulum tempor vitae tortor eget lobortis. Integer sapien eros, condimentum sit amet est at, vulputate efficitur elit. Praesent in velit pharetra, commodo libero a, egestas leo. Sed nunc enim, sodales vel pretium at, sodales a magna. Mauris nec nibh at enim venenatis faucibus. Duis bibendum commodo mattis. Phasellus luctus felis varius porta lacinia.

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
GET /recommendations/:id
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
