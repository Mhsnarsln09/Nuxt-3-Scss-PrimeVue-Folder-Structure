import { HttpClient } from "./HttpClient"

export class BaseService {
  public client: HttpClient;
  baseUrl = 'api/';
  constructor(endpoint: string = "") {
    this.baseUrl = endpoint;
    this.client = new HttpClient();
  }
}