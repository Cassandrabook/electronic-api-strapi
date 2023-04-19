import { Request, Response } from "express";
import { ComputerClient } from "../clients/computer_client";
import { Computer } from "../models/Computer";

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

  public async postComputer(req: Request, res: Response) {
    const computer: Computer = req.body;
    try {
      await this.client.postComputer(computer);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateComputer(req: Request, res: Response) {
    const id = +req.params.id;
    const computer: Computer = req.body;
    try {
      await this.client.putComputer(id, computer);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
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
