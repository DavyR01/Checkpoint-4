const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const CoinsControllers = require("./controllers/CoinsControllers");
const userControllers = require("./controllers/userControllers");

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des coins
router.get("/api/coins", CoinsControllers.browse);
router.get("/api/coins/:id", CoinsControllers.read);
router.put("/api/coins/:id", CoinsControllers.edit);
router.post("/api/coins", CoinsControllers.add);
router.delete("/api/coins/:id", CoinsControllers.destroy);

// Gestion des users
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, verifyToken, userControllers.add);
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

module.exports = router;
