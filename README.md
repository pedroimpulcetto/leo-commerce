# Iniciar Projeto

1- npm init -y

2- npm install -D jest

3- npm install -D @babel/plugin-transform-modules-commonjs

4- incluir dentro do arquivo `package.json`
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



## Criar um e-commerce para treinar POO (programação orientada a objetos)

- [ ] Usuários
    - [x] validador de senha
    - [x] tem que ser maior 11 anos 
- [ ] Produtos 
    - [ ] em oferta
    - [ ] com desconto
    - [ ] frete grátis
- [ ] Carrinho
- [ ] Catálogo de produtos




## O que aprendemos?

- Criar uma classe com atributos e métodos
- Criar uma data usando o `new Date()`
- Criamos testes para validar nosso sistema