import axios from "axios";
import { Televison } from "../models/Televison";

const client = axios.create({ baseURL: "http://localhost:1337/api" });

export class TelevisonClient {
  constructor() {}

  public async getTelevisons(): Promise<any> {
    const response = await client.get("/televisions");
    return response.data;
  }

  public async getTelevison(id: number): Promise<any> {
    const response = await client.get(`/televisions/${id}`);
    return response.data;
  }

  public async deleteTelevison(id: number): Promise<any> {
    const response = await client.delete(`/televisions/${id}`);
    return response.data;
  }

  public async postTelevison(televison: Televison): Promise<any> {
    const response = await client.post(`/televisions`, televison);
    return response.data;
  }

  public async putTelevison(id: number, televison: Televison): Promise<any> {
    const response = await client.put(`/televisions/${id}`, televison);
    return response.data;
  }
}
