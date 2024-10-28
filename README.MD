# Formulário de Avaliação de Filmes

Este projeto consiste em um formulário onde o usuário pode registrar o nome de um filme que assistiu e atribuir uma nota de 0 a 5. As avaliações são enviadas para uma API construída em Node.js e armazenadas em um banco de dados MySQL. A API está configurada para ser hospedada de forma privada, mantendo as credenciais do banco seguras.

## Tecnologias Utilizadas
- **Frontend:** HTML, CSS, Bootstrap, JavaScript (Fetch API)
- **Backend:** Node.js, MySQL

## Funcionalidades
- **Cadastro de Avaliações:** Permite ao usuário registrar o filme assistido e sua nota de forma rápida e fácil.
- **Validação de Dados:** Assegura que todos os campos necessários estão preenchidos antes do envio.
- **Conexão com Banco de Dados Externo:** Armazena as informações sobre filmes e avaliações no MySQL de maneira segura.

## Estrutura do Projeto
- `index.html` - Página principal com o formulário de avaliação.
- `assets/` - Pasta onde ficam os "paralelos" do projeto, como imagens, estilos e o script.
	- `styles/` - Pasta com arquivos CSS para estilização.
	- `js/` - Pasta com arquivos JavaScript, incluindo o envio de dados via Fetch API.
- `API/` - Contém os arquivos da API em Node.js:
  - `index.js` - Arquivo principal da API, responsável por receber as requisições de avaliação e conectá-las ao banco de dados.
  - `db.js` - Arquivo contendo as credenciais de acesso ao banco de dados (deve ser mantido privado e seguro).

## Configuração do Projeto

1. **Clonar o Repositório**
    ```bash
    git clone https://github.com/seu_usuario/formulario-avaliacao-filmes.git
    cd formulario-avaliacao-filmes
    ```

2. **Configurar Banco de Dados**
    - Crie um banco de dados MySQL.
    - No arquivo `API/db.js`, configure suas credenciais do banco de dados:
      ```javascript
      const pool = mysql.createPool({
          host: 'seu_host',
          user: 'seu_usuario',
          password: 'sua_senha',
          database: 'seu_banco'
      });
      ```

3. **Instalar Dependências da API**
    - Navegue até a pasta `API` e instale as dependências:
      ```bash
      cd API
      npm install
      ```

4. **Hospedar a API em Ambiente Privado**

	Para manter as credenciais do banco de dados seguras, recomendamos hospedar os dois arquivos da API em um ambiente que suporte variáveis de ambiente e acesso privado ao código. No meu caso, escolhi a **Vercel**. Aqui estão algumas opções populares:

   - **Heroku**: Fácil de configurar e permite variáveis de ambiente (chamadas de `Config Vars`). Heroku oferece uma camada gratuita com recursos básicos, ideal para projetos de pequeno porte.
     - Guia de Deploy: [Heroku Node.js Deployment](https://devcenter.heroku.com/articles/deploying-nodejs)

   - **Vercel**: Focado em hospedagem serverless e integração com projetos Node.js. Embora não ofereça um banco de dados diretamente, pode ser integrado a bancos externos via variáveis de ambiente.
     - Guia de Deploy: [Vercel Node.js API](https://vercel.com/docs/concepts/functions/serverless-functions)

   - **Render**: Oferece uma experiência semelhante ao Heroku, com suporte a variáveis de ambiente e acesso privado aos arquivos. Render tem opções gratuitas e pagas para projetos de API.
     - Guia de Deploy: [Render Node.js Deploy](https://render.com/docs/deploy-node-express-app)

   - **DigitalOcean App Platform**: DigitalOcean oferece hospedagem segura para APIs, com planos acessíveis e variáveis de ambiente. Ideal para projetos que precisam de escalabilidade futura.
     - Guia de Deploy: [DigitalOcean Node.js Hosting](https://docs.digitalocean.com/products/app-platform/quickstart/#node-js)

   - **Railway**: Plataforma fácil de usar para deploy de aplicativos Node.js com suporte a variáveis de ambiente e banco de dados integrados. O plano gratuito inclui uma boa quantidade de horas de uso.
     - Guia de Deploy: [Railway Node.js Guide](https://docs.railway.app/deploy/quickstart)

5. **Atualizar o cliente fetch**
	- Após o deploy da API, insira a URL no arquivo `script.js`:
		```javascript
		const response = await fetch("https://linkdasuaapi.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ moviename, director, seenon, rate })
      });
	```

6. **Rodar o Backend em Ambiente Local (opcional)**
    - Para desenvolvimento local, execute o seguinte comando na pasta `API`:
      ```bash
      node index.js
      ```

7. **Abrir o Formulário**
    - Após o deploy da API e da aplicação, acesse a página `index.html` no navegador e preencha o formulário para registrar uma avaliação de filme.

8. **Conferir**
	- Abra seu banco de dados e veja se a linha é inserida.

## Contribuição
Contribuições são bem-vindas! Envie um pull request ou entre em contato para mais informações.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
