const express = require("express");
const shangpinRouter = express.Router();
const shangpinController=require("../controller/shangpinController.js");

shangpinRouter.get("/shangpin.do",shangpinController.getAlldata);
module.exports = shangpinRouter;