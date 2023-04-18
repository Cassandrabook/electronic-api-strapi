import { Request, Response } from "express";
import { ComputerClient } from "../clients/computer_client";

export class ComputersController {
  private client: ComputerClient;
  constructor(client: ComputerClient) {
    this.client = client;
  }

  public async getComputers(req: Request, res: Response) {
    const data = await this.client.getComputers();
    res.send(data.data);
  }

  public async getComputer(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getComputer(id);
    res.send(data.data);
  }

  public async deleteComputer(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteComputer(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
