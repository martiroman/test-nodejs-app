const express = require("express");

const mainController = require("../controllers/main");
const router = express.Router();

router.get("/", mainController.getData);
router.get("/metrics", mainController.getMetrics);
router.post("/receiver", mainController.postData);


module.exports = router;