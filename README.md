# Desafios Docker FullCycle

## Desafio 1

Criar uma imagem em GoLang com menos de 2mb e publica-la no Docker Hub. Ao ser executada essa imagem deverá retornar o seguinte resultado: Full Cycle Rocks!!

Rodar o seguinte comando para verificar o resultado: 

> docker run pedrohenriquegarcia/fullcycle

[Clique aqui para ir para a imagem no DockerHub](https://hub.docker.com/repository/docker/pedrohenriquegarcia/fullcycle/general)

## Desafio 2

Subir uma aplicação que utilize o nginx como loadbalancer, o backend feito em node e um database mysql. O desafio em ter um docker-compose que irá subir toda a sua aplicação e ao navegador acessar localhost/8080 deverá retornar:
<h1>Full Cycle Rocks!</h1>

Com uma lista de nomes cadastrada no banco de dados.

Exec:
docker-compose up -d