# Hospedagem web
- Para ver uma versão live, acessar o link: [Comics]https://ricmeira.github.io/comics/

# Sobre o projeto
- Para facilitar o desenvolvimento e evitar de ter que fazer setup inicial(webpack, etc), o projeto foi incialmente criado usando o [Create React App](https://github.com/facebook/create-react-app).
- Envio de email foi feito utilizando o serviço da emailJS
- Testes foram feitos usando Jest + Enzyme

# Sobre arquitetura
- O projeto tem 4 pastas principais:
-- assets: Onde ficam arquivos estaticos(imagens)
-- constantes: Onde ficam os arquivos de constantes do projeto
-- container: Onde ficam os arquivos stateful
-- components: Onde ficam os arquivos stateless

# Bibliotecas utiliziadas(Além do react)
- Axios - Para requisições http
- Proptypes - Para checagem de tipos
- EmailJS - Para envio de emails
- Jest/Enzyme - Para testes
- gh-pages - Para deploy no github pages

# Proximos Passos
- Melhorias de Layout
- Adicionar validações(email)
- Aumento na cobertura de testes
- Filtragem avançada de quadrinhos(por autor, personagem, etc)
- Novas páginas(pesquisas de personagens, etc)
- Criação backend para controle de usuários, favoritos, etc
- Adicionar redux(ou retirar o excesso de useState por useReduce)
- Adicionar rotas

# Como rodar local
- npm install
- Ir em https://developer.marvel.com, criar uma conta e colocar o valor da api_key na constante MARVEL_API_KEY da classe constants
- Criar conta no EmailJS.Seguir a documentação em: [EmailJS](https://www.emailjs.com/docs/user-guide/connecting-email-services/). Colocar os valores das variaveis criadas no EmailJS nas constantes EMAIL_TEMPLATE_NAME, EMAIL_USER_NAME, EMAIL_SERVICE_NAME da classe constants
- npm start

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.