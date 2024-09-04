import express from "express";
const app = express();
// app.use(express.json);

/**
 * 'GET' para capturar as mensagens salvas no Banco de Dados
 *  através de um identificador de mensagens
 * */

app.get("/hello", (req, res) => {
   res.status(200).send("Hello World!");
});
/**
 * 'POST' para enviar mensagens e salvá-las no Banco de Dados
 * */
app.post("/enviar-mensagens", (req, res) => {
    
})
export default app;
