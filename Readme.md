# guess cariocao
É uma API back-end para realizar palpites dos jogos do campeonato carioca 2023

## Sobre
Com o guess cariocao você poderá controlar todos os palpites e resultados dos jogos do campenoato carioca 2023 com seues amigos.
  #### Tecnologias utilizadas
  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40"/>

          
1. Clone o repositório
2. Instale as dependências 
```bash
npm i
```
3. Crie um banco de dados PostgreSql com o nome que você preferir
4. Configure o arquivo .env utilizando o .env.example como referêcia.
5. Realize toas a migrações
```bash
npx prisma migrate dev
```

6. Para popular o banco de dados utilize o comando
```bash
npx prisma db seed"
```
7. Acesse o ambiente de desenvolvimento
```bash
npm run dev
```

## Rotas da aplicação

### adiconar usuário
``` bash
  POST =>  /add-user

    body
    {
        name: <nome_do_usuario> 
    }
```
### Buscar todos os usuários
``` bash
    GET => /find-all-users

    Respota:
    [
        {
            "id": "<id-usuario>",
            "name": "<nome-do-usuario>",
            "createAt": "<data-da-criação>"
        }
    ]
```

### Buscar todos os times
``` bash
    GET => /find-all-teams
    Resposta:
    [
        {
            "id": "1",
            "name": "<nome-do-time>",
            "createAt": "<data-da-criação>"
        }
    ]
```

### Id dos Resultados

    1: home team

    2: tie

    3: visitin team

    4: uninitiated

    5: cancelled

### Alterar resultado da partida
``` bash
   PUT => /match/:idMatch
    
    body
    {
        resulMatch: <id_do_resultado>
    }
```

### Id dos Palpites

    1: home team

    2: tie

    3: visitin team

### Palpites
```bash
POST => /add-guess
body:
    {
        userId: <numero>,
        matchId: <id_da_partida>,
        guess: <id_do_papite>
    }
```
```bash
GET => /find-all-guesses
    [
        {
            "id": <id-palpite>,
            "users": {
            "id": <id-user>,
            "name": "<nome-usuario>"
            },
            "matches": {
            "id": <id-partida>,
            "teams_matches_homeTeamIdToteams": {
                "id": <id-time-casa>,
                "name": "<nome-time-casa>"
            },
            "teams_matches_visitingTeamIdToteams": {
                "id": <id-time-visitante>,
                "name": "<nome-time-visitante>"
            }
            },
            "possibilitiesGuesses": {
            "id": <id-guess>,
            "description": "<descricacao-palpite>"
            }
        }
    ]
```

```bash
GET => /find-all-guesses?userId=<userId>
    [
        {
            "id": "<id-palpite>",
            "matches": {
            "id": "<id-partida>",
            "teams_matches_homeTeamIdToteams": {
                "id": "<id-time-casa>",
                "name": "<nome-time-casa>"
            },
            "teams_matches_visitingTeamIdToteams": {
                "id": "<id-time-visitante>",
                "name": "<nome-time-visitante>"
            }
            },
            "possibilitiesGuesses": {
                "id": "<id-guess>",
                "description": "<descricacao-palpite>"
            }
        }
    ]
```

### Diagrama do banco de dados
![Diagrama_Banco_de_Dados_guesses_cariocao](https://user-images.githubusercontent.com/85373624/226603155-9b604133-2739-469c-a399-db389a6ee76c.png)

