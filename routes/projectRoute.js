let express = require('express');
let projectRouter = express.Router();
let projectController = require("../controller/projectCtrl");

//! adding project
projectRouter.post("/add", projectController.add);

//! viewing project
projectRouter.post("/view", projectController.view);

module.exports = projectRouter;