import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:1337/api" });

export class TelevisonClient {
  constructor() {}

  public async getTelevisons(): Promise<any> {
    const response = await client.get("/televisons");
    return response.data;
  }

  public async getTelevison(id: number): Promise<any> {
    const response = await client.get(`/televisons/${id}`);
    return response.data;
  }

  public async deleteTelevison(id: number): Promise<any> {
    const response = await client.delete(`/televisons/${id}`);
    return response.data;
  }
}
