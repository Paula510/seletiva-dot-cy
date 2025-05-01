# Histórias de Usuário

## História de Usuário 001 - Login de Usuário Válido

### Descrição
Como usuário registrado, desejo fazer login no sistema para acessar minhas funcionalidades personalizadas.

### Critérios de Aceitação
1. O sistema deve permitir que o usuário preencha os seguintes campos: Usuário e senha.
2. Após um cadastro bem-sucedido, o usuário deve ser redirecionado para a página inicial.

---

## História de Usuário 002 - Tentativa de Login de Usuário Bloqueado

### Descrição
Como usuário registrado, desejo realizar uma tentativa de login no sistema com um usuário bloqueado.

### Critérios de Aceitação
1. O sistema deve permitir que o usuário preencha os seguintes campos: Usuário e senha.
2. O sistema indicar que o usuário e senha digitado está bloqueado, não permitindo acesso a tela inicial.

---

## História de Usuário 003 - Finalização de Venda com sucesso

### Descrição
Como usuário, desejo realizar uma compra de um produto com sucesso.

### Critérios de Aceitação
1. O usuário deve ser capaz de selecionar um produto e adicioná-lo ao carrinho de compras.
2. O sistema deve permitir que o usuário revise os itens no carrinho antes de finalizar a compra.
3. O usuário deve preencher corretamente as informações de nome, sobrenome e cep.
4. Após a confirmação do pagamento, o sistema deve exibir uma mensagem de "Compra finalizada com sucesso" e um número de pedido.

---

## História de Usuário 004 - Desistência de compra de um item adicionado ao carrinho

### Descrição
Como usuário, desejo remover um item do meu carrinho de compras caso eu decida não prosseguir com a compra.

### Critérios de Aceitação
1. O usuário deve ser capaz de adicionar itens ao carrinho.
2. O usuário deve poder visualizar os itens no carrinho e escolher remover um item.
3. O sistema deve atualizar o carrinho, removendo o item escolhido.
4. O sistema deve garantir que o item removido não seja mais exibido no carrinho ou no checkout.
5. O usuário deve ser capaz de continuar navegando pelo site.