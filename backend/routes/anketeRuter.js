const express = require("express");
const router = express.Router();

//import kontrolere
const { getAnkete } = require("../controllers/anketeKontroler");

router.route("/").get(getAnkete);
router.route("/").post(getAnkete);

module.exports = router;
