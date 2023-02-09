# Test-tecnico-GCB

# Contexto
Este projeto trata-se de uma API, nos padrões REST de cadastro, pesquisa, edição e deleção de um médico em por exemplo um App de medicos de um plano de saúde. Foi-se utilizado NestJS em uma arquitetura de microsserviços, criando uma aplicação completamente funcional com ou sem banco de dados e permitindo uma fácil alteração ou refatoração caso necessário. Nesta API é possivel criar um médico passando as informações de Nome, CRM, Cep( Do local onde trabalha, após informar o CEP é realizado uma requisição XML para api dos correios, que retorna o endereço num protocolo SOAP, que é convertido para JSON e adicionado no banco e Dados), telefone da clínica, celular do médico e suas área de atuação. Além disso um cliente pode buscar o médico para marcar uma consulta de acordo com o critério que quiser, desde endereço até nome e área de atuação do médico. A parte de deleção é utilizando Soft delete, ou seja a informação apenas é escondida do usuário, mas persiste no Banco de Dados. Neste projeto tive algumas dificuldades, como requisição XML para uma api dos correios e conversão de Protocolo SOAP para JSON, além disso configurar o Sequelize junto do NEST, já que até então somente tinha trabalha com NEST e Prisma.

## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, NestJS, MYSQL, Sequelize, TypeScript, Microsserviços, Rest API, Docker, Jest

Imsomnia:
> Utilizado para verificar API, arquivo JSON junto do projeto.

## Subindo Banco de Dados
```bash
cd Test-tecnico-GCB/ && docker-compose up -d
```

## Instalando Dependências

```bash
npm install
```

## Executando aplicação

  ```bash
  npm run db:reset && npm start
  ```
  
## Executando Testes

* Para rodar todos os testes:

  ```
    npm test && npm run test:e2e
  ```
