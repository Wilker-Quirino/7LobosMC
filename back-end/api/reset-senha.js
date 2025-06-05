const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Exemplo de "banco de dados" (substitua por seu banco real)
const usuarios = [
  {
    id: 1,
    nome: "João",
    email: "joao@email.com",
    senhaHash: "hash",
    role: "user",
  },
  {
    id: 2,
    nome: "Admin",
    email: "admin@email.com",
    senhaHash: "hash",
    role: "admin",
  },
];

// Middleware para autenticar e verificar se é admin
function autenticarAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, "segredo123", (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token inválido" });

    if (usuario.role !== "admin") {
      return res.status(403).json({ message: "Acesso negado" });
    }

    req.usuario = usuario;
    next();
  });
}

// Rota para resetar senha
router.post("/api/reset-senha", autenticarAdmin, async (req, res) => {
  const { email } = req.body;

  const usuario = usuarios.find((u) => u.email === email);

  if (!usuario) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const novaSenha = gerarSenhaTemporaria();
  const senhaHash = await bcrypt.hash(novaSenha, 10);

  usuario.senhaHash = senhaHash;

  // Aqui poderia enviar a senha por email
  console.log(`Nova senha para ${email}: ${novaSenha}`);

  return res.json({
    message: `Senha resetada com sucesso. Nova senha: ${novaSenha}`,
    novaSenha, // 🔥 (ou não enviar isso por segurança)
  });
});

// Função para gerar senha aleatória
function gerarSenhaTemporaria() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let senha = "";
  for (let i = 0; i < 8; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return senha;
}

module.exports = router;
