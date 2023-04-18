import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:1337/api" });

export class ComputerClient {
  constructor() {}

  public async getComputers(): Promise<any> {
    const response = await client.get("/computers");
    console.log(response);

    return response.data;
  }

  public async getComputer(id: number): Promise<any> {
    const response = await client.get(`/computers/${id}`);
    return response.data;
  }

  public async deleteComputer(id: number): Promise<any> {
    const response = await client.delete(`/computers/${id}`);
    return response.data;
  }
}
