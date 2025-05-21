📄 README.md
markdown
Copiar
Editar
# ChatGPT Clone 🤖💬

Este projeto é um clone simplificado do ChatGPT, com frontend em React e backend em Node.js utilizando a API da OpenAI.

---

## 📁 Estrutura do Projeto

chat-gpt-clone/
├── server/ # Backend (Node.js + Express)
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── app.js
│ │ └── server.js
│ ├── .env
│ └── package.json
├── web/ # Frontend (React)
│ ├── public/
│ ├── src/
│ │ ├── api.js
│ │ ├── App.js
│ │ └── ...
│ └── package.json
└── README.md

yaml
Copiar
Editar

---

## ⚙️ Requisitos

- Node.js v18+ (preferencialmente v20+)
- Conta na [OpenAI](https://platform.openai.com/signup)
- Chave da API da OpenAI

---

## 🚀 Como executar

### 🔧 Backend (Node.js)

1. Vá até a pasta `server`:

```bash
cd server
Instale as dependências:

bash
Copiar
Editar
npm install
Crie um arquivo .env com sua chave da API:

env
Copiar
Editar
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PORT=5555
Inicie o servidor:

bash
Copiar
Editar
node src/server.js
O backend será iniciado em http://localhost:5555

💻 Frontend (React)
Em outro terminal, vá até a pasta web:

bash
Copiar
Editar
cd web
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie a aplicação React:

bash
Copiar
Editar
npm start
O frontend será iniciado em http://localhost:3000

📡 Comunicação
O frontend faz requisições via Axios para:

http
Copiar
Editar
POST http://localhost:5555/api/prompt
🛠 Tecnologias Utilizadas
React (Frontend)

Axios (HTTP requests)

Node.js + Express (Backend)

OpenAI API (Integração com IA)

dotenv (Variáveis de ambiente)

🧠 Melhorias Futuras
Autenticação e login

Histórico de mensagens

Suporte a múltiplos usuários

Interface responsiva e melhorias de UX

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

yaml
Copiar
Editar

---

## ✅ Próximo passo

1. Salve esse conteúdo em um arquivo `README.md` na raiz do projeto.
2. Adicione e envie para o GitHub:

```bash
git add README.md
git commit -m "Adiciona README com instruções do projeto"
git push

## ✒️ Autor
<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/7528140?v=4"/>
    <p>&nbsp&nbsp&nbspAnderson Lima Araújo<br>
    &nbsp&nbsp&nbsp<a href="http://instagram.com/andersonbhbr">Instagram</a>&nbsp;|&nbsp;<a href="https://github.com/AndersonBHBR">GitHub</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/anderson-araujo-pcd/">LinkedIn</a>&nbsp;|&nbsp;<a href="https://www.behance.net/andersonbhbr">Behance</a></p>
</p>
<br/><br/>
<p>

---
⌨️ por [Anderson Lima Araújo](https://github.com/AndersonBHBR) 😊#
