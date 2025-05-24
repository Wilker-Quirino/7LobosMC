import express from "express";
import cors from "cors";
import { db } from "./conect.js";
import { ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.get("/gallery", async (request, response) => {
  try {
    const data = await db.collection("gallery").find({}).toArray();
    response.status(200).json(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    response.status(500).json({ error: "Erro no servidor" });
  }
});

// ROTA GET POR ID
app.get("/gallery/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await db
      .collection("gallery")
      .findOne({ _id: new ObjectId(id) });

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: "Item não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
