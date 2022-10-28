import Sequelize from "sequelize";

const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306
}

const myDatabase = new Sequelize("parrot", "root", "mysql", DB_CONFIG);

async function testingConnection(){
  try {
    await myDatabase.authenticate()
    console.log("Banco de dados conectado")
  } catch (error){
    console.log("Não conectado ao banco de dados ", error)
  }
}

Object.assign(myDatabase, {testingConnection})
export default myDatabase;