const express = require("express");
const router = express.Router();

const controller = require("../controllers/funcionario-controller");

router.get("/", controller.get);
router.get("/cargo", controller.getByCargo);
router.get("/id", controller.getById);
router.get("/qtd", controller.getByQtd);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete)


module.exports = router;