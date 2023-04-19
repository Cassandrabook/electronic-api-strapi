import express from "express";
import { ComputerClient } from "../clients/computer_client";
import { ComputersController } from "../controlers/computersController";

const computersRouter = express.Router();
const client = new ComputerClient();
const controller = new ComputersController(client);

computersRouter
  .get("/", controller.getComputers.bind(controller))
  .get("/:id", controller.getComputer.bind(controller))
  .post("/", controller.postComputer.bind(controller))
  .put("/:id", controller.updateComputer.bind(controller))
  .delete("/:id", controller.deleteComputer.bind(controller));

export default computersRouter;
