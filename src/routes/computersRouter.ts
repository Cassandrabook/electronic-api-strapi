import express from "express";
import { ComputerClient } from "../clients/computer_client";
import { ComputersController } from "../controlers/computersController";

const client = new ComputerClient();
const controller = new ComputersController(client);

const computersRouter = express.Router();

computersRouter
  .get("/", controller.getComputers.bind(controller))
  .get("/:id", controller.getComputer.bind(controller))
  .delete("/:id", controller.deleteComputer.bind(controller));

export default computersRouter;
