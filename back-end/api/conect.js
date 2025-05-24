import { MongoClient } from "mongodb";

const URL = process.env.MONGO_URL;

const client = new MongoClient(URL);

try {
  await client.connect();
  console.log("Conectado ao MongoDB com sucesso");
} catch (error) {
  console.error("Erro ao conectar ao MongoDB", error);
}

export const db = client.db("7lobosmc");
