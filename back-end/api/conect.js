import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

console.log("URL do MongoDB:", process.env.MONGO_URL);

const URI = process.env.MONGO_URL;

const client = new MongoClient(URI);

try {
  await client.connect();
  console.log("Conectado ao MongoDB com sucesso");
} catch (error) {
  console.error("Erro ao conectar ao MongoDB", error);
}

export const db = client.db("7lobosmc");
