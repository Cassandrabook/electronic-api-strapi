import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:1337/api",
});

export class AudioClient {
  constructor() {}

  public async getAudio_systems(): Promise<any> {
    const response = await client.get(`/audio-systems`);

    return response.data;
  }

  public async getAudio_system(id: number): Promise<any> {
    const response = await client.get(`/audio-systems/${id}`);

    return response.data;
  }

  public async deleteAudio_system(id: number): Promise<any> {
    const response = await client.delete(`/audio-systems/${id}`);

    return response.data;
  }
}
