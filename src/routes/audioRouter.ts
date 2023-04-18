import express from "express";
import { AudioClient } from "../clients/audio_client";
import { AudioController } from "../controlers/audioController";

const client = new AudioClient();
const controller = new AudioController(client);

const audioRouter = express.Router();

audioRouter
  .get("/", controller.getAudio_systems.bind(controller))
  .get("/:id", controller.getAudio_system.bind(controller))
  .delete("/:id", controller.deleteAudio_system.bind(controller));

export default audioRouter;
