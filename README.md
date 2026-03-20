# Como iniciar o projeto

## Clonar o repositório

`git clone git@github.com:EmmanuelRBoo/yoog-saude.git`

## Buildar e iniciar o docker

`docker build --no-cache`

Quando o build finalizar rodar o comando:

`docker compose up`

Em outra aba, rodar o comando para inserir a migration no banco:

`docker compose exec backend npx prisma migrate dev --name database`

## Abrir no navegador

A aplicação fica hospedada no [localhost](http://localhost)

# Explicação do projeto

O projeto foi estruturado com foco em organização, escalabilidade e facilidade de manutenção. A primeira decisão importante foi a separação entre backend e frontend, permitindo que cada parte evolua de forma independente e siga responsabilidades bem definidas. Essa divisão também facilita o deploy e a manutenção do sistema como um todo.

No backend, foi adotada uma arquitetura em camadas, separando controllers, services e models. Os controllers lidam com as requisições HTTP, os services concentram a lógica de negócio e os models são responsáveis pelo acesso aos dados. Essa abordagem reduz o acoplamento e torna o código mais fácil de testar e manter. Além disso, a organização por domínio (appointments, patients e auth) permite que o sistema cresça de forma modular, sem gerar confusão estrutural.

O uso do Prisma como ORM foi uma escolha voltada para produtividade e segurança, já que ele oferece tipagem forte e integração direta com o TypeScript. Isso reduz erros comuns em queries e melhora a experiência de desenvolvimento. A autenticação foi isolada em um módulo próprio, com utilitários para geração e validação de tokens, seguindo um padrão comum de APIs stateless.

No frontend, a aplicação foi construída com React e organizada de forma a separar claramente a interface da lógica de dados. A camada de API centraliza as chamadas ao backend, evitando duplicação e facilitando mudanças futuras. Os componentes reutilizáveis, como botões, inputs, tabelas e modais, foram criados para garantir consistência visual e reaproveitamento de código. As páginas são organizadas por domínio, acompanhando a mesma lógica do backend, o que facilita o entendimento geral do sistema.

Por fim, o uso de Docker e NGINX foi uma decisão voltada para padronização de ambiente e preparação para produção. O Docker permite que toda a aplicação rode de forma consistente em qualquer máquina, enquanto o NGINX atua como proxy reverso, centralizando o acesso e direcionando as requisições corretamente entre frontend e backend. Essas escolhas tornam o projeto mais robusto e pronto para escalar.
