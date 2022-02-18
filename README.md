instalação do yarn  = npm i --global yarn 
Inicialização do projeto yarn init = yarn init -y
adicione typescript = yarn add typescript -D

baixe a dependecia para conversão do typescript para não precisar ficar fazendo arquivo por arquivo
= yarn add ts-node-dev -D

Logo em seguida adicione ao package.json o script de dev par rodar
= "script": {
    "dev": "ts-node-dev src/server.ts"
}