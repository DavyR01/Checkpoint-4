const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.AVATAR_DIRECTORY });

const authControllers = require("./controllers/authControllers");
const coinsControllers = require("./controllers/coinsControllers");
const userControllers = require("./controllers/userControllers");
const fileControllers = require("./controllers/fileControllers");

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
router.get("/api/coins", coinsControllers.browse);
router.get("/api/coins/:id", coinsControllers.read);
router.put("/api/coins/:id", verifyToken, coinsControllers.edit);
router.post("/api/coins", verifyToken, coinsControllers.add);
router.delete("/api/coins/:id", verifyToken, coinsControllers.destroy);

// Gestion des users
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, verifyToken, userControllers.add);
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

// Gestion des avatars
router.post(
  "/api/avatars",
  verifyToken,
  upload.single("avatar"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);
router.get("/api/avatars/:fileName", fileControllers.sendAvatar);

module.exports = router;
