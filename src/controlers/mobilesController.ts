import { Request, Response } from "express";
import { MobileClient } from "../clients/mobile_client";
import { Mobile } from "../models/Mobile";

export class MobilesController {
  private client: MobileClient;
  constructor(client: MobileClient) {
    this.client = client;
  }

  public async getMobiles(req: Request, res: Response) {
    const data = await this.client.getMobiles();
    res.send(data.data);
  }

  public async getMobile(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getMobile(id);
    res.send(data.data);
  }

  public async deleteMobile(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteMobile(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async postMobile(req: Request, res: Response) {
    const mobile: Mobile = req.body;
    try {
      await this.client.postMobile(mobile);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  public async updateMobile(req: Request, res: Response) {
    const id = +req.params.id;
    const mobile: Mobile = req.body;
    try {
      await this.client.putMobile(id, mobile);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
