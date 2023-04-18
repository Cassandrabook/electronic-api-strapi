import { Request, Response } from "express";
import { AudioClient } from "../clients/audio_client";

export class AudioController {
  private client: AudioClient;
  constructor(client: AudioClient) {
    this.client = client;
  }

  public async getAudio_systems(req: Request, res: Response) {
    const data = await this.client.getAudio_systems();
    res.send(data.data);
  }

  public async getAudio_system(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getAudio_system(id);
    res.send(data.data);
  }

  public async deleteAudio_system(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteAudio_system(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
