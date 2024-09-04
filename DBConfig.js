import { Sequelize } from "sequelize";
const sequelize = new Sequelize("mensagens_recebidas", "root", "", {
   host: "localhost",
   dialect: "mysql",
});

sequelize
   .authenticate()
   .then(() => {
      console.log("Conexão com o MySQL bem sucedida.");
   })
   .catch(() => {
      console.log("Erro ao conectar-se ao MySQL." + erro);
   });

const mensagem = sequelize.define("mensagem", {
   id: {},
   nome: {},
   email: {},
   telefone: {},
   mensagem: {},
});
