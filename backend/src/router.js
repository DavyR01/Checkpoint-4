const express = require("express");

const router = express.Router();

const CoinsControllers = require("./controllers/CoinsControllers");

router.get("api/coins", CoinsControllers.browse);
router.get("api/coins/:id", CoinsControllers.read);
router.put("api/coins/:id", CoinsControllers.edit);
router.post("api/coins", CoinsControllers.add);
router.delete("api/coins/:id", CoinsControllers.destroy);

module.exports = router;
