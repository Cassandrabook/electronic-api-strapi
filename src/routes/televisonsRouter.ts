import express from "express";
import { TelevisonClient } from "../clients/televison_client";
import { TelevisonsController } from "../controlers/televisonsController";

const client = new TelevisonClient();
const controller = new TelevisonsController(client);

const televisonRouter = express.Router();

televisonRouter
  .get("/", controller.getTelevisons.bind(controller))
  .get("/:id", controller.getTelevison.bind(controller))
  .delete("/:id", controller.deleteTelevison.bind(controller))
  .post("/", controller.postTelevison.bind(controller))
  .put("/:id", controller.updateTelevison.bind(controller));

export default televisonRouter;
