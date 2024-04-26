
import { BaseService } from "./baseServices/BaseService";

export class PostService extends BaseService {
  constructor() {
    super("posts");
  }
  Login(item: any) {
    return this.client.Post(this.baseUrl, item);
  }
}
