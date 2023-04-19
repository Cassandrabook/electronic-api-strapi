import axios from "axios";
import { Audio } from "../models/Audio";

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

  public async postAudio_system(audio: Audio): Promise<any> {
    const response = await client.post(`/audio-systems`, audio);
    return response.data;
  }

  public async putAudio_system(id: number, audio: Audio): Promise<any> {
    const response = await client.put(`/audio-systems/${id}`, audio);
    return response.data;
  }
}
