# Iniciar Projeto

1- npm init -y

2- npm install -D jest

3- npm install -D @babel/plugin-transform-modules-commonjs

4- incluir dentro do arquivo `package.json`

5- npm install -D husky

```json
{
    "type": "module"
}
```

5- criar novo arquivo `.babelrc` e incluir dentro

```json
{
    "env": {
        "test": {
            "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    }
}
```

### Code Style

Instalar extensões para VSCode:

-   ESlint
-   IntelliCode
-   EditorConfig for VS Code
-   Material Icon Theme
-   Prettier - Code Formatter
-   Rainbow Brackets

Acessar `configurações` do VSCode, acessar o arquivo `settings.json` e adicionar:

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.tabWidth": 4,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

# Criar um e-commerce para treinar POO (programação orientada a objetos)

-   [ ] Usuários
    -   [x] validador de senha
    -   [x] tem que ser maior 11 anos
-   [ ] Produtos
    -   [ ] cupom
    -   [ ] com desconto
-   [ ] Carrinho
    -   [ ] frete grátis
    -   Compras acima de R$200,00 frete grátis. Frete fixo de R$20,00
-   [ ] Cupom

# O que aprendemos?

-   Criar uma classe com atributos e métodos
-   Criar uma data usando o `new Date()`
-   Criamos testes para validar nosso sistema
