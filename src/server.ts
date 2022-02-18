import express from 'express'

//quando aparece no import os 3 pontos, segnifica que ele precisa importar as typagens da biblioteca
// @types/express
const app = express()

//http://localhost:3000
app.listen(3000, () => console.log("Escutando na porta 3000"))