# Cenários de Teste

## Cenário 1 - Tentativa de Login com Sucesso

### Descrição
Verificar se o usuário consegue realizar o login com sucesso utilizando credenciais válidas.

### Pré-condições
- O usuário possui uma conta válida no sistema.

### Passos
1. Acesse o site Sauce Demo (`https://www.saucedemo.com`).
2. Insira o nome de usuário válido no campo de login.
3. Insira a senha válida no campo de senha.
4. Clique no botão "Login".
   
### Resultado Esperado
- O sistema deve redirecionar o usuário para a página de inventário de produtos.
- A URL deve conter `/inventory.html`.
- A página de inventário deve exibir a mensagem "Products".

---

## Cenário 2 - Tentativa de Login com um Usuário Inválido

### Descrição
Verificar se o sistema exibe uma mensagem de erro ao tentar realizar o login com credenciais bloqueadas.

### Pré-condições
- O usuário não possui uma conta válida no sistema.

### Passos
1. Acesse o site Sauce Demo (`https://www.saucedemo.com`).
2. Insira um nome de usuário inválido no campo de login.
3. Insira uma senha inválida no campo de senha.
4. Clique no botão "Login".

### Resultado Esperado
- O sistema exibe a mensagem de erro: "Epic sadface: Sorry, this user has been locked out.".
- A tela de login permanece visível e não permite o acesso à página de inventário.

---

## Cenário 3 - Finalização de Compra com Sucesso

### Descrição
Verificar se o processo de finalização da compra é realizado corretamente após o login com sucesso.

### Pré-condições
- O usuário está logado no sistema com credenciais válidas.
- O carrinho de compras está vazio.

### Passos
1. Acesse o site Sauce Demo (`https://www.saucedemo.com`).
2. Faça login com credenciais válidas.
3. Selecione um item e clique nele.
4. Clique no botão "Add to cart" para adicionar o item ao carrinho.
5. Vá para o carrinho de compras clicando no ícone do carrinho.
6. Clique em "Checkout" para iniciar o processo de compra.
7. Preencha os campos de checkout com as informações necessárias.
8. Clique em "Continue" para prosseguir.
9. Clique em "Finish" para concluir a compra.

### Resultado Esperado
- O sistema exibe a mensagem "Thank you for your order!".
- O usuário consegue voltar para a página inicial da loja.

---

## Cenário 4 - Desistência de Compra Removendo um Item do Carrinho de Compras

### Descrição
Verificar se o usuário consegue remover um item do carrinho de compras antes de finalizar a compra.

### Pré-condições
- O usuário está logado no sistema com credenciais válidas.
- O carrinho de compras contém ao menos um item.

### Passos
1. Acesse o site Sauce Demo (`https://www.saucedemo.com`).
2. Faça login com credenciais válidas.
3. Selecione um item e clique nele.
4. Clique no botão "Add to cart" para adicionar o item ao carrinho.
5. Vá para o carrinho de compras clicando no ícone do carrinho.
6. Clique no botão "Remove" ao lado do item para removê-lo do carrinho.
7. Verifique se o item foi removido com sucesso.
8. Verifique se o total do carrinho foi recalculado corretamente.

### Resultado Esperado
- O item removido não está mais presente no carrinho.
- O valor total do carrinho é atualizado corretamente (deve ser 0 se o carrinho estiver vazio).