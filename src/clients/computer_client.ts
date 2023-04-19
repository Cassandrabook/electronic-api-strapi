import axios from "axios";
import { Computer } from "../models/Computer";

const client = axios.create({ baseURL: "http://localhost:1337/api" });

export class ComputerClient {
  constructor() {}

  public async getComputers(): Promise<any> {
    const response = await client.get(`/computers`);
    console.log("hello");
    return response.data;
  }

  public async getComputer(id: number): Promise<any> {
    const response = await client.get(`/computers/${id}`);
    return response.data;
  }

  public async postComputer(computer: Computer): Promise<any> {
    const response = await client.post(`/computers`, computer);
    return response.data;
  }

  public async putComputer(id: number, computer: Computer): Promise<any> {
    const response = await client.put(`/computers/${id}`, computer);
    return response.data;
  }

  public async deleteComputer(id: number): Promise<any> {
    const response = await client.delete(`/computers/${id}`);
    return response.data;
  }
}
