import { Request, Response } from "express";
import { TelevisonClient } from "../clients/televison_client";
import { Televison } from "../models/Televison";

export class TelevisonsController {
  private client: TelevisonClient;
  constructor(client: TelevisonClient) {
    this.client = client;
  }

  public async getTelevisons(req: Request, res: Response) {
    const data = await this.client.getTelevisons();
    res.send(data.data);
  }

  public async getTelevison(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getTelevison(id);
    res.send(data.data);
  }

  public async deleteTelevison(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.getTelevison(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async postTelevison(req: Request, res: Response) {
    const televison: Televison = req.body;
    try {
      await this.client.postTelevison(televison);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateTelevison(req: Request, res: Response) {
    const id = +req.params.id;
    const televison: Televison = req.body;
    try {
      await this.client.putTelevison(id, televison);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
