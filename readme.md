<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

## Laravel 5.5 - ReactJS

### Instalação e Configuração

1. Clonar o repositório: 
`git clone https://github.com/kessejones/laravel-react.git`
2. Criar um arquivo de ambiente e atualizar com a conexão do seu banco de dados: `cp .env.example .env`
3. Baixar as dependências do composer: `composer install && composer update`
4. Baixar as dependências do Node: `npm install`
5. Gerar a chave para o projeto: `php artisan jwt:secret` 
6. Criar a tabela de usuários: `php artisan migrate`
7. Popular a tabela de usuários: `php artisan db:seed`
8. Compilar o ReactJS: `npm run development` ou `npm run watch` 
