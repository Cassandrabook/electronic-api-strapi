import express from "express";
import { MobileClient } from "../clients/mobile_client";
import { TelevisonClient } from "../clients/televison_client";
import { MobilesController } from "../controlers/mobilesController";
import { TelevisonsController } from "../controlers/televisonsController";

const client = new TelevisonClient();
const controller = new TelevisonsController(client);

const televisonRouter = express.Router();

televisonRouter
  .get("/", controller.getTelevisons.bind(controller))
  .get("/:id", controller.getTelevison.bind(controller))
  .delete("/:id", controller.deleteTelevison.bind(controller));

export default televisonRouter;
