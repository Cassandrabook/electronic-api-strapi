import axios from "axios";
import { Mobile } from "../models/Mobile";

const client = axios.create({ baseURL: "http://localhost:1337/api" });

export class MobileClient {
  constructor() {}

  public async getMobiles(): Promise<any> {
    const response = await client.get("/mobiles");
    return response.data;
  }

  public async getMobile(id: number): Promise<any> {
    const response = await client.get(`/mobiles/${id}`);
    return response.data;
  }

  public async deleteMobile(id: number): Promise<any> {
    const response = await client.delete(`/mobiles/${id}`);
    return response.data;
  }

  public async postMobile(mobile: Mobile): Promise<any> {
    const response = await client.post(`/mobiles`, mobile);
    return response.data;
  }

  public async putMobile(id: number, mobile: Mobile): Promise<any> {
    const response = await client.put(`/mobiles/${id}`, mobile);
    return response.data;
  }
}
