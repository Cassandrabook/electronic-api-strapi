import express from "express";
import { MobileClient } from "../clients/mobile_client";
import { MobilesController } from "../controlers/mobilesController";

const client = new MobileClient();
const controller = new MobilesController(client);

const mobileRouter = express.Router();

mobileRouter
  .get("/", controller.getMobiles.bind(controller))
  .get("/:id", controller.getMobile.bind(controller))
  .delete("/:id", controller.deleteMobile.bind(controller));

export default mobileRouter;
