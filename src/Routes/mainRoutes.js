const express = require ("express");
const mainController = require("../Controllers/mainControllers");

const mainRouter = express.Router();

mainRouter.get("/", mainController.showHome);
mainRouter.get("/login", mainController.showlogin)
mainRouter.get("/register", mainController.showregister)
module.exports = mainRouter;