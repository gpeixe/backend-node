# Trabalho para disciplina de Tópicos em Computacão II no IFSP - Sao Carlos
## Backend em Node.js feito com Express para CRUD de produtos
### Para instalar as dependencias:
 - npm install
 ### Para  rodar a aplicação:
 - npm start
### Rotas:

 - Listar todos os produtos: [GET] http://localhost:4000/products

 - Deletar um produto: [DELETE] http://localhost:4000/products/_id

 - Criar um produto: [POST] http://localhost:4000/products

 - Atualizar um produto: [PUT] http://localhost:4000/products/_id

### Tanto para criar (POST) quando para atualizar (PUT) um produto
  O conteúdo do Body requer:
    
  name: String, 
  
  price: Number,
  
  description: String,
